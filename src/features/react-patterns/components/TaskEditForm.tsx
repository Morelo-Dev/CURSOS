import React, { useState } from 'react';
import type { Task } from '../types/task';

interface TaskEditFormProps {
  task: Task;
  onSave: (updates: Partial<Task>) => void;
  onCancel: () => void;
  isSubtask?: boolean;
}

export const TaskEditForm: React.FC<TaskEditFormProps> = ({
  task,
  onSave,
  onCancel,
  isSubtask = false,
}) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || '');
  const [priority, setPriority] = useState(task.priority);
  const [tags, setTags] = useState(task.tags.join(', '));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) return;

    const updates: Partial<Task> = {
      title: title.trim(),
      description: description.trim() || undefined,
      priority,
      tags: tags.split(',').map(tag => tag.trim()).filter(Boolean),
    };

    onSave(updates);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onCancel();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-edit-form" onKeyDown={handleKeyDown}>
      <div className="form-group">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título de la tarea"
          className="edit-input edit-title"
          autoFocus
          required
        />
      </div>

      {!isSubtask && (
        <>
          <div className="form-group">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descripción (opcional)"
              className="edit-textarea"
              rows={2}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
                className="edit-select"
              >
                <option value="low">Baja</option>
                <option value="medium">Media</option>
                <option value="high">Alta</option>
              </select>
            </div>

            <div className="form-group">
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="etiquetas, separadas, por, comas"
                className="edit-input"
              />
            </div>
          </div>
        </>
      )}

      <div className="edit-actions">
        <button type="submit" className="btn btn-primary btn-sm">
          Guardar
        </button>
        <button type="button" onClick={onCancel} className="btn btn-secondary btn-sm">
          Cancelar
        </button>
      </div>
    </form>
  );
};