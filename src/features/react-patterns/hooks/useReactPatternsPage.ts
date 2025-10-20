import { useState, useCallback } from 'react';
import { useTasks } from '../hooks/useTasks';
import { useModal } from '../hooks/useModal';
import { reactPatternsData } from '../data/reactPatternsData';
import type { TaskFilter, DemoType } from '../data/reactPatternsData';
import type { Task as TaskType } from '../types/task';

// Hook personalizado para la lógica de ReactPatternsPage
export const useReactPatternsPage = () => {
    // Hooks existentes
    const {
        tasks,
        addTask,
        updateTask,
        deleteTask,
        addSubtask,
        removeSubtask,
        toggleTask
    } = useTasks();

    const { isOpen, openModal, closeModal } = useModal();

    // Estado local
    const [filter, setFilter] = useState<TaskFilter>('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [shouldError, setShouldError] = useState(false);
    const [activeDemo, setActiveDemo] = useState<DemoType>('compound');

    // Función para navegar a demo
    const navigateToDemo = useCallback((demo: 'compound' | 'renderProps' | 'hocs' | 'slots' | 'hooks') => {
        setActiveDemo(demo);
        setTimeout(() => {
            const demoSection = document.getElementById('interactive-demos');
            if (demoSection) {
                demoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    }, []);

    // Función para filtrar tareas
    const getFilteredTasks = useCallback((): TaskType[] => {
        return tasks.filter(task => {
            const matchesFilter = filter === 'all' || 
                (filter === 'completed' && task.completed) || 
                (filter === 'pending' && !task.completed);
            
            const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                task.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                task.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
            
            return matchesFilter && matchesSearch;
        });
    }, [tasks, filter, searchTerm]);

    // Función para simular loading
    const simulateLoading = useCallback(() => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000);
    }, []);

    // Función para simular error
    const simulateError = useCallback(() => {
        setShouldError(true);
        setTimeout(() => setShouldError(false), 3000);
    }, []);

    // Funciones de estado
    const setIsLoadingState = useCallback((loading: boolean) => {
        setIsLoading(loading);
    }, []);

    const setShouldErrorState = useCallback((error: boolean) => {
        setShouldError(error);
    }, []);

    return {
        // Datos estáticos
        pageData: reactPatternsData,
        
        // Estado de tareas
        tasks: getFilteredTasks(),
        allTasks: tasks,
        
        // Estado de UI
        filter,
        setFilter,
        searchTerm,
        setSearchTerm,
        isLoading,
        shouldError,
        activeDemo,
        
        // Modal
        isModalOpen: isOpen,
        openModal,
        closeModal,
        
        // Funciones de tareas
        addTask,
        updateTask,
        deleteTask,
        addSubtask,
        removeSubtask,
        toggleTask,
        
        // Funciones de navegación y demos
        navigateToDemo,
        setActiveDemo,
        simulateLoading,
        simulateError,
        
        // Funciones de estado
        setIsLoading: setIsLoadingState,
        setShouldError: setShouldErrorState
    };
};