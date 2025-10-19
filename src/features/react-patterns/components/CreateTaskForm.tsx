import React, { useState } from 'react';
import type { Task } from '../types/task';
import toast from 'react-hot-toast';

interface CreateTaskFormProps {
  onSave: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  onCancel: () => void;
}

interface SubtaskInput {
  id: string;
  title: string;
  priority: 'low' | 'medium' | 'high';
}

export const CreateTaskForm: React.FC<CreateTaskFormProps> = ({
  onSave,
  onCancel,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [tags, setTags] = useState('');
  const [subtasks, setSubtasks] = useState<SubtaskInput[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      toast.error('El título es obligatorio');
      return;
    }

    const newTask: Omit<Task, 'id' | 'createdAt'> = {
      title: title.trim(),
      description: description.trim() || undefined,
      priority,
      tags: tags.split(',').map(tag => tag.trim()).filter(Boolean),
      completed: false,
      subtasks: subtasks
        .filter(st => st.title.trim())
        .map(st => ({
          id: `temp-${st.id}`, // Se reemplazará por un ID real
          title: st.title.trim(),
          description: undefined,
          completed: false,
          priority: st.priority,
          tags: [],
          subtasks: [],
          createdAt: new Date(),
        })),
    };

    onSave(newTask);
    toast.success('Tarea creada exitosamente');
  };

  const addSubtask = () => {
    const newSubtask: SubtaskInput = {
      id: Date.now().toString(),
      title: '',
      priority: 'medium',
    };
    setSubtasks([...subtasks, newSubtask]);
  };

  const updateSubtask = (id: string, field: keyof SubtaskInput, value: string) => {
    setSubtasks(subtasks.map(st => 
      st.id === id ? { ...st, [field]: value } : st
    ));
  };

  const removeSubtask = (id: string) => {
    setSubtasks(subtasks.filter(st => st.id !== id));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onCancel();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-task-form" onKeyDown={handleKeyDown}>
      <div className="form-section">
        <h3>Información principal</h3>
        <div className="form-group">
          <label htmlFor="task-title">Título *</label>
          <input
            type="text"
            id="task-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ej: Revisar código del proyecto"
            className="form-input"
            autoFocus
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="task-description">Descripción</label>
          <textarea
            id="task-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Detalles adicionales sobre la tarea..."
            className="form-textarea"
            rows={3}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="task-priority">Prioridad</label>
            <select
              id="task-priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
              className="form-select"
            >
              <option value="low">Baja</option>
              <option value="medium">Media</option>
              <option value="high">Alta</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="task-tags">Etiquetas</label>
            <input
              type="text"
              id="task-tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="react, trabajo, urgente (separadas por comas)"
              className="form-input"
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <div className="subtasks-header">
          <h3>Subtareas ({subtasks.length})</h3>
          <button
            type="button"
            onClick={addSubtask}
            className="btn btn-secondary btn-sm"
          >
            + Añadir subtarea
          </button>
        </div>

        {subtasks.length > 0 && (
          <div className="subtasks-list">
            {subtasks.map((subtask, index) => (
              <div key={subtask.id} className="subtask-input-row">
                <span className="subtask-number">{index + 1}.</span>
                <input
                  type="text"
                  value={subtask.title}
                  onChange={(e) => updateSubtask(subtask.id, 'title', e.target.value)}
                  placeholder="Título de la subtarea..."
                  className="subtask-title-input"
                />
                <select
                  value={subtask.priority}
                  onChange={(e) => updateSubtask(subtask.id, 'priority', e.target.value)}
                  className="subtask-priority-input"
                >
                  <option value="low">Baja</option>
                  <option value="medium">Media</option>
                  <option value="high">Alta</option>
                </select>
                <button
                  type="button"
                  onClick={() => removeSubtask(subtask.id)}
                  className="btn-remove-subtask-form"
                  title="Eliminar subtarea"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {subtasks.length === 0 && (
          <p className="no-subtasks-message">
            No hay subtareas. Haz clic en "Añadir subtarea" para crear una.
          </p>
        )}
      </div>

      <div className="form-actions">
        <button type="button" onClick={onCancel} className="btn btn-secondary">
          Cancelar
        </button>
        <button type="submit" className="btn btn-primary">
          Crear Tarea
        </button>
      </div>
    </form>
  );
};