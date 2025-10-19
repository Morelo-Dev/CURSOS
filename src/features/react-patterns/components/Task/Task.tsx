import React, { createContext, useContext } from 'react';
import toast from 'react-hot-toast';
import type { ReactNode } from 'react';
import type { Task as TaskType } from '../../types/task';
import { TaskEditForm } from '../TaskEditForm';
import { AddSubtaskForm } from '../AddSubtaskForm';

// Context para compartir el estado de la tarea entre subcomponentes
interface TaskContextValue {
    task: TaskType;
    onToggle?: (id: string) => void;
    onEdit?: (id: string, updates: Partial<TaskType>) => void;
    onDelete?: (id: string) => void;
    onAddSubtask?: (parentId: string, subtask: Omit<TaskType, 'id' | 'createdAt'>) => void;
    onRemoveSubtask?: (parentId: string, subtaskId: string) => void;
    isEditing?: boolean;
    setIsEditing?: (editing: boolean) => void;
}

const TaskContext = createContext<TaskContextValue | null>(null);

const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('Los componentes Task.* deben usarse dentro de un componente Task');
    }
    return context;
};

// Props para el componente principal Task
interface TaskProps {
    task: TaskType;
    children: ReactNode;
    onToggle?: (id: string) => void;
    onEdit?: (id: string, updates: Partial<TaskType>) => void;
    onDelete?: (id: string) => void;
    onAddSubtask?: (parentId: string, subtask: Omit<TaskType, 'id' | 'createdAt'>) => void;
    onRemoveSubtask?: (parentId: string, subtaskId: string) => void;
    className?: string;
}

// Componente principal Task (Compound Component)
export const Task: React.FC<TaskProps> & {
    Header: React.FC<TaskHeaderProps>;
    Body: React.FC<TaskBodyProps>;
    Footer: React.FC<TaskFooterProps>;
    Actions: React.FC<TaskActionsProps>;
} = ({
    task,
    children,
    onToggle,
    onEdit,
    onDelete,
    onAddSubtask,
    onRemoveSubtask,
    className = ''
}) => {
        const [isEditing, setIsEditing] = React.useState(false);

        const contextValue: TaskContextValue = {
            task,
            onToggle,
            onEdit,
            onDelete,
            onAddSubtask,
            onRemoveSubtask,
            isEditing,
            setIsEditing,
        };

        const priorityClass = `task-priority-${task.priority}`;
        const completedClass = task.completed ? 'task-completed' : '';

        if (isEditing) {
            return (
                <TaskContext.Provider value={contextValue}>
                    <div className={`task-card editing ${priorityClass} ${completedClass} ${className}`}>
                        <TaskEditForm
                            task={task}
                            onSave={(updates) => {
                                onEdit?.(task.id, updates);
                                setIsEditing(false);
                            }}
                            onCancel={() => setIsEditing(false)}
                        />
                    </div>
                </TaskContext.Provider>
            );
        }

        return (
            <TaskContext.Provider value={contextValue}>
                <div className={`task-card ${priorityClass} ${completedClass} ${className}`}>
                    {children}
                </div>
            </TaskContext.Provider>
        );
    };

// Props para subcomponentes
interface TaskHeaderProps {
    children?: ReactNode;
    showPriority?: boolean;
    showTags?: boolean;
    className?: string;
}

interface TaskBodyProps {
    children?: ReactNode;
    showDescription?: boolean;
    showSubtasks?: boolean;
    className?: string;
}

interface TaskFooterProps {
    children?: ReactNode;
    showDates?: boolean;
    className?: string;
}

interface TaskActionsProps {
    children?: ReactNode;
    showToggle?: boolean;
    showEdit?: boolean;
    showDelete?: boolean;
    className?: string;
}

// Subcomponente Header
const TaskHeader: React.FC<TaskHeaderProps> = ({
    children,
    showPriority = true,
    showTags = true,
    className = ''
}) => {
    const { task, onToggle } = useTaskContext();

    return (
        <div className={`task-header ${className}`}>
            <div className="task-title-section">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggle?.(task.id)}
                    className="task-checkbox"
                />
                <h3 className="task-title">{task.title}</h3>
            </div>

            <div className="task-meta">
                {showPriority && (
                    <span className={`task-priority-badge priority-${task.priority}`}>
                        {task.priority}
                    </span>
                )}
                {showTags && task.tags.length > 0 && (
                    <div className="task-tags">
                        {task.tags.map(tag => (
                            <span key={tag} className="task-tag">#{tag}</span>
                        ))}
                    </div>
                )}
            </div>

            {children}
        </div>
    );
};

// Subcomponente Body
const TaskBody: React.FC<TaskBodyProps> = ({
    children,
    showDescription = true,
    showSubtasks = true,
    className = ''
}) => {
    const { task, onToggle, onAddSubtask, onRemoveSubtask } = useTaskContext();
    const [isAddingSubtask, setIsAddingSubtask] = React.useState(false);

    const handleAddSubtask = (subtask: Omit<TaskType, 'id' | 'createdAt'>) => {
        onAddSubtask?.(task.id, subtask);
        setIsAddingSubtask(false);
        toast.success('Subtarea añadida');
    };

    const handleToggleSubtask = (subtaskId: string) => {
        onToggle?.(subtaskId);
    };

  const handleRemoveSubtask = (subtaskId: string) => {
    toast((t) => (
      <div className="toast-confirm">
        <p>¿Eliminar esta subtarea?</p>
        <div className="toast-actions">
          <button
            onClick={() => {
              onRemoveSubtask?.(task.id, subtaskId);
              toast.dismiss(t.id);
              toast.success('Subtarea eliminada');
            }}
            className="btn btn-sm btn-error"
          >
            Eliminar
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="btn btn-sm btn-secondary"
          >
            Cancelar
          </button>
        </div>
      </div>
    ), {
      duration: Infinity,
      position: 'top-center',
      style: {
        background: '#fff',
        color: '#374151',
        border: '2px solid #ef4444',
        borderRadius: '12px',
        boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        padding: '1rem',
        minWidth: '300px',
      },
    });
  };    return (
        <div className={`task-body ${className}`}>
            {showDescription && task.description && (
                <p className="task-description">{task.description}</p>
            )}

            {showSubtasks && (
                <div className="task-subtasks">
                    {task.subtasks.length > 0 && (
                        <>
                            <div className="subtasks-header">
                                <h4>Subtareas ({task.subtasks.length})</h4>
                                <button
                                    onClick={() => setIsAddingSubtask(true)}
                                    className="btn btn-sm btn-secondary"
                                    title="Añadir subtarea"
                                >
                                    + Subtarea
                                </button>
                            </div>
                            <ul className="subtask-list">
                                {task.subtasks.map(subtask => (
                                    <li key={subtask.id} className={`subtask ${subtask.completed ? 'completed' : ''}`}>
                                        <div className="subtask-content">
                                            <input
                                                type="checkbox"
                                                checked={subtask.completed}
                                                onChange={() => handleToggleSubtask(subtask.id)}
                                                className="subtask-checkbox"
                                            />
                                            <span className="subtask-title">{subtask.title}</span>
                                            {subtask.priority !== 'medium' && (
                                                <span className={`subtask-priority priority-${subtask.priority}`}>
                                                    {subtask.priority}
                                                </span>
                                            )}
                                        </div>
                                        <button
                                            onClick={() => handleRemoveSubtask(subtask.id)}
                                            className="btn-remove-subtask"
                                            title="Eliminar subtarea"
                                        >
                                            ×
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}

                    {task.subtasks.length === 0 && !isAddingSubtask && (
                        <div className="no-subtasks">
                            <button
                                onClick={() => setIsAddingSubtask(true)}
                                className="btn btn-sm btn-secondary"
                            >
                                + Añadir subtarea
                            </button>
                        </div>
                    )}

                    {isAddingSubtask && (
                        <AddSubtaskForm
                            onAdd={handleAddSubtask}
                            onCancel={() => setIsAddingSubtask(false)}
                        />
                    )}
                </div>
            )}

            {children}
        </div>
    );
};

// Subcomponente Footer
const TaskFooter: React.FC<TaskFooterProps> = ({
    children,
    showDates = true,
    className = ''
}) => {
    const { task } = useTaskContext();

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    return (
        <div className={`task-footer ${className}`}>
            {showDates && (
                <div className="task-dates">
                    <span className="task-created">
                        Creada: {formatDate(task.createdAt)}
                    </span>
                    {task.dueDate && (
                        <span className="task-due">
                            Vence: {formatDate(task.dueDate)}
                        </span>
                    )}
                </div>
            )}

            {children}
        </div>
    );
};

// Subcomponente Actions
const TaskActions: React.FC<TaskActionsProps> = ({
    children,
    showToggle = true,
    showEdit = true,
    showDelete = true,
    className = ''
}) => {
    const { task, onToggle, onDelete, isEditing, setIsEditing } = useTaskContext();

    return (
        <div className={`task-actions ${className}`}>
            {showToggle && (
                <button
                    onClick={() => onToggle?.(task.id)}
                    className={`btn btn-toggle ${task.completed ? 'btn-uncomplete' : 'btn-complete'}`}
                >
                    {task.completed ? 'Marcar pendiente' : 'Completar'}
                </button>
            )}

            {showEdit && (
                <button
                    onClick={() => setIsEditing?.(!isEditing)}
                    className="btn btn-edit"
                >
                    {isEditing ? 'Cancelar' : 'Editar'}
                </button>
            )}

            {showDelete && (
                <button
                    onClick={() => {
                        toast((t) => (
                            <div className="toast-confirm">
                                <p>¿Eliminar esta tarea?</p>
                                <div className="toast-actions">
                                    <button
                                        onClick={() => {
                                            onDelete?.(task.id);
                                            toast.dismiss(t.id);
                                            toast.success('Tarea eliminada');
                                        }}
                                        className="btn btn-sm btn-error"
                                    >
                                        Eliminar
                                    </button>
                                    <button
                                        onClick={() => toast.dismiss(t.id)}
                                        className="btn btn-sm btn-secondary"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </div>
                        ), {
                            duration: Infinity,
                            position: 'top-center',
                            style: {
                                background: '#fff',
                                color: '#374151',
                                border: '2px solid #ef4444',
                                borderRadius: '12px',
                                boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
                                padding: '1rem',
                                minWidth: '300px',
                            },
                        });
                    }}
                    className="btn btn-delete"
                >
                    Eliminar
                </button>
            )}

            {children}
        </div>
    );
};

// Asignamos los subcomponentes al componente principal
Task.Header = TaskHeader;
Task.Body = TaskBody;
Task.Footer = TaskFooter;
Task.Actions = TaskActions;