import { useState, useCallback, useMemo } from 'react';
import toast from 'react-hot-toast';
import type { Task, TaskFilter, TaskSortBy } from '../types/task';

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Aprender Compound Components',
    description: 'Estudiar el patrón de Compound Components en React',
    completed: false,
    priority: 'high',
    tags: ['react', 'patterns'],
    subtasks: [
      {
        id: '1-1',
        title: 'Leer documentación',
        completed: true,
        priority: 'medium',
        tags: ['docs'],
        subtasks: [],
        createdAt: new Date('2024-01-15'),
      },
      {
        id: '1-2',
        title: 'Implementar ejemplo',
        completed: false,
        priority: 'high',
        tags: ['coding'],
        subtasks: [],
        createdAt: new Date('2024-01-16'),
      },
      {
        id: '1-3',
        title: 'Escribir tests',
        completed: false,
        priority: 'low',
        tags: ['testing'],
        subtasks: [],
        createdAt: new Date('2024-01-17'),
      }
    ],
    createdAt: new Date('2024-01-14'),
    dueDate: new Date('2024-01-20'),
  },
  {
    id: '2',
    title: 'Practicar Render Props',
    description: 'Implementar componentes usando render props',
    completed: false,
    priority: 'medium',
    tags: ['react', 'advanced'],
    subtasks: [
      {
        id: '2-1',
        title: 'Crear ejemplo básico',
        completed: false,
        priority: 'medium',
        tags: ['coding'],
        subtasks: [],
        createdAt: new Date('2024-01-16'),
      }
    ],
    createdAt: new Date('2024-01-15'),
  },
  {
    id: '3',
    title: 'Configurar proyecto',
    completed: true,
    priority: 'low',
    tags: ['setup'],
    subtasks: [],
    createdAt: new Date('2024-01-13'),
  },
  {
    id: '4',
    title: 'Implementar HOCs',
    description: 'Crear Higher-Order Components para funcionalidades transversales',
    completed: false,
    priority: 'high',
    tags: ['react', 'hoc', 'patterns'],
    subtasks: [],
    createdAt: new Date('2024-01-18'),
    dueDate: new Date('2024-01-25'),
  }
];

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filter, setFilter] = useState<TaskFilter>({});
  const [sortBy, setSortBy] = useState<TaskSortBy>('createdAt');

  const addTask = useCallback((task: Omit<Task, 'id' | 'createdAt'>) => {
    const newTask: Task = {
      ...task,
      id: Date.now().toString(),
      createdAt: new Date(),
    };
    setTasks(prev => [...prev, newTask]);
  }, []);

  const updateTask = useCallback((id: string, updates: Partial<Task>) => {
    setTasks(prev => 
      prev.map(task => {
        if (task.id === id) {
          return { ...task, ...updates };
        }
        // También buscar en subtareas
        if (task.subtasks.length > 0) {
          const updatedSubtasks = task.subtasks.map(subtask =>
            subtask.id === id ? { ...subtask, ...updates } : subtask
          );
          if (updatedSubtasks.some((subtask, index) => subtask !== task.subtasks[index])) {
            return { ...task, subtasks: updatedSubtasks };
          }
        }
        return task;
      })
    );
    toast.success('Tarea actualizada');
  }, []);

  const deleteTask = useCallback((id: string) => {
    setTasks(prev => 
      prev.map(task => {
        // Si es una tarea principal
        if (task.id === id) {
          return null;
        }
        // Si tiene subtareas, filtrar la subtarea
        if (task.subtasks.length > 0) {
          const filteredSubtasks = task.subtasks.filter(subtask => subtask.id !== id);
          if (filteredSubtasks.length !== task.subtasks.length) {
            return { ...task, subtasks: filteredSubtasks };
          }
        }
        return task;
      }).filter(Boolean) as Task[]
    );
  }, []);

  const toggleTask = useCallback((id: string) => {
    const findTask = (tasks: Task[]): Task | null => {
      for (const task of tasks) {
        if (task.id === id) return task;
        const found = findTask(task.subtasks);
        if (found) return found;
      }
      return null;
    };
    
    const targetTask = findTask(tasks);
    if (targetTask) {
      updateTask(id, { completed: !targetTask.completed });
    }
  }, [tasks, updateTask]);

  const addSubtask = useCallback((parentId: string, subtask: Omit<Task, 'id' | 'createdAt'>) => {
    const newSubtask: Task = {
      ...subtask,
      id: `${parentId}-${Date.now()}`,
      createdAt: new Date(),
    };
    
    setTasks(prev => 
      prev.map(task => 
        task.id === parentId 
          ? { ...task, subtasks: [...task.subtasks, newSubtask] }
          : task
      )
    );
  }, []);

  const removeSubtask = useCallback((parentId: string, subtaskId: string) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === parentId 
          ? { ...task, subtasks: task.subtasks.filter(st => st.id !== subtaskId) }
          : task
      )
    );
  }, []);

  const filteredAndSortedTasks = useMemo(() => {
    let filtered = [...tasks];

    // Aplicar filtros
    if (filter.priority) {
      filtered = filtered.filter(task => task.priority === filter.priority);
    }
    if (filter.tag) {
      filtered = filtered.filter(task => task.tags.includes(filter.tag!));
    }
    if (filter.completed !== undefined) {
      filtered = filtered.filter(task => task.completed === filter.completed);
    }
    if (filter.search) {
      const searchLower = filter.search.toLowerCase();
      filtered = filtered.filter(task => 
        task.title.toLowerCase().includes(searchLower) ||
        task.description?.toLowerCase().includes(searchLower)
      );
    }

    // Aplicar ordenamiento
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'priority':
          const priorityOrder = { high: 3, medium: 2, low: 1 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        case 'title':
          return a.title.localeCompare(b.title);
        case 'dueDate':
          if (!a.dueDate && !b.dueDate) return 0;
          if (!a.dueDate) return 1;
          if (!b.dueDate) return -1;
          return a.dueDate.getTime() - b.dueDate.getTime();
        case 'createdAt':
        default:
          return b.createdAt.getTime() - a.createdAt.getTime();
      }
    });

    return filtered;
  }, [tasks, filter, sortBy]);

  return {
    tasks: filteredAndSortedTasks,
    allTasks: tasks,
    filter,
    setFilter,
    sortBy,
    setSortBy,
    addTask,
    updateTask,
    deleteTask,
    toggleTask,
    addSubtask,
    removeSubtask,
  };
};