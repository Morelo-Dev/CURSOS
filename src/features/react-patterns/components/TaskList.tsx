import React from 'react';
import type { ReactNode } from 'react';
import type { Task } from '../types/task';

// Props del componente TaskList usando Render Props pattern
interface TaskListProps {
  tasks: Task[];
  isLoading?: boolean;
  error?: string | null;
  
  // Render Props - funciones que definen cómo renderizar elementos
  renderTask?: (task: Task, index: number) => ReactNode;
  renderEmpty?: () => ReactNode;
  renderLoading?: () => ReactNode;
  renderError?: (error: string) => ReactNode;
  renderHeader?: (taskCount: number) => ReactNode;
  
  // Props adicionales
  className?: string;
  onTaskAction?: (action: string, taskId: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  isLoading = false,
  error = null,
  renderTask,
  renderEmpty,
  renderLoading,
  renderError,
  renderHeader,
  className = '',
  onTaskAction,
}) => {
  // Render Loading
  if (isLoading) {
    return (
      <div className={`task-list loading ${className}`}>
        {renderLoading ? renderLoading() : (
          <div className="default-loading">
            <div className="spinner"></div>
            <p>Cargando tareas...</p>
          </div>
        )}
      </div>
    );
  }

  // Render Error
  if (error) {
    return (
      <div className={`task-list error ${className}`}>
        {renderError ? renderError(error) : (
          <div className="default-error">
            <h3>Error al cargar las tareas</h3>
            <p>{error}</p>
            <button onClick={() => onTaskAction?.('retry', '')}>
              Intentar de nuevo
            </button>
          </div>
        )}
      </div>
    );
  }

  // Render Empty
  if (tasks.length === 0) {
    return (
      <div className={`task-list empty ${className}`}>
        {renderEmpty ? renderEmpty() : (
          <div className="default-empty">
            <h3>No hay tareas</h3>
            <p>¡Crea tu primera tarea para comenzar!</p>
            <button onClick={() => onTaskAction?.('create', '')}>
              Crear tarea
            </button>
          </div>
        )}
      </div>
    );
  }

  // Render Task List
  return (
    <div className={`task-list ${className}`}>
      {/* Header opcional */}
      {renderHeader && (
        <div className="task-list-header">
          {renderHeader(tasks.length)}
        </div>
      )}

      {/* Lista de tareas */}
      <div className="task-list-content">
        {tasks.map((task, index) => (
          <div key={task.id} className="task-list-item">
            {renderTask ? renderTask(task, index) : (
              <DefaultTaskRenderer task={task} onAction={onTaskAction} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Renderer por defecto para tareas
interface DefaultTaskRendererProps {
  task: Task;
  onAction?: (action: string, taskId: string) => void;
}

const DefaultTaskRenderer: React.FC<DefaultTaskRendererProps> = ({ task, onAction }) => {
  const priorityColors = {
    high: '#ff4757',
    medium: '#ffa502',
    low: '#2ed573',
  };

  return (
    <div className={`default-task ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <div className="task-main">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onAction?.('toggle', task.id)}
          />
          <div className="task-info">
            <h4 className="task-title">{task.title}</h4>
            {task.description && (
              <p className="task-description">{task.description}</p>
            )}
          </div>
        </div>
        
        <div className="task-meta">
          <span 
            className="priority-indicator"
            style={{ backgroundColor: priorityColors[task.priority] }}
          >
            {task.priority}
          </span>
          
          {task.tags.length > 0 && (
            <div className="task-tags">
              {task.tags.map(tag => (
                <span key={tag} className="tag">#{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="task-actions">
        <button onClick={() => onAction?.('edit', task.id)}>
          Editar
        </button>
        <button onClick={() => onAction?.('delete', task.id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

// Ejemplo de uso con diferentes render props
export const TaskListExamples = {
  // Ejemplo 1: Lista compacta
  CompactList: (tasks: Task[]) => (
    <TaskList
      tasks={tasks}
      renderTask={(task) => (
        <div className="compact-task">
          <span className={`status ${task.completed ? 'done' : 'pending'}`}>
            {task.completed ? '✓' : '○'}
          </span>
          <span className="title">{task.title}</span>
          <span className="priority">{task.priority}</span>
        </div>
      )}
      renderHeader={(count) => (
        <h2>Lista Compacta ({count} tareas)</h2>
      )}
    />
  ),

  // Ejemplo 2: Lista con cards
  CardList: (tasks: Task[]) => (
    <TaskList
      tasks={tasks}
      renderTask={(task) => (
        <div className="task-card">
          <div className="card-header">
            <h3>{task.title}</h3>
            <span className={`priority-badge ${task.priority}`}>
              {task.priority}
            </span>
          </div>
          <div className="card-body">
            <p>{task.description}</p>
            {task.subtasks.length > 0 && (
              <small>{task.subtasks.length} subtareas</small>
            )}
          </div>
        </div>
      )}
      renderEmpty={() => (
        <div className="empty-state-custom">
          <h3>🎯 ¡Comienza tu productividad!</h3>
          <p>Organiza tus ideas en tareas accionables</p>
        </div>
      )}
    />
  ),

  // Ejemplo 3: Lista agrupada por prioridad
  GroupedList: (tasks: Task[]) => {
    const groupedTasks = tasks.reduce((groups, task) => {
      const priority = task.priority;
      if (!groups[priority]) {
        groups[priority] = [];
      }
      groups[priority].push(task);
      return groups;
    }, {} as Record<string, Task[]>);

    return (
      <div className="grouped-task-list">
        {Object.entries(groupedTasks).map(([priority, priorityTasks]) => (
          <div key={priority} className={`priority-group ${priority}`}>
            <h3>Prioridad {priority} ({priorityTasks.length})</h3>
            <TaskList
              tasks={priorityTasks}
              renderTask={(task) => (
                <div className="grouped-task">
                  <input type="checkbox" checked={task.completed} readOnly />
                  <span>{task.title}</span>
                </div>
              )}
            />
          </div>
        ))}
      </div>
    );
  },
};