import React, { useState } from 'react';
import type { Task } from '../types/task';

interface AddSubtaskFormProps {
  onAdd: (subtask: Omit<Task, 'id' | 'createdAt'>) => void;
  onCancel: () => void;
}

export const AddSubtaskForm: React.FC<AddSubtaskFormProps> = ({
  onAdd,
  onCancel,
}) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) return;

    const newSubtask: Omit<Task, 'id' | 'createdAt'> = {
      title: title.trim(),
      completed: false,
      priority,
      tags: [],
      subtasks: [],
    };

    onAdd(newSubtask);
    setTitle('');
    setPriority('medium');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onCancel();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-subtask-form" onKeyDown={handleKeyDown}>
      <div className="subtask-form-content">
        <div className="subtask-main-input">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Nueva subtarea..."
            className="subtask-input"
            autoFocus
            required
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
            className="subtask-priority-select"
          >
            <option value="low">Baja</option>
            <option value="medium">Media</option>
            <option value="high">Alta</option>
          </select>
        </div>
        <div className="subtask-actions">
          <button type="submit" className="btn btn-primary btn-sm">
            Añadir
          </button>
          <button type="button" onClick={onCancel} className="btn btn-secondary btn-sm">
            Cancelar
          </button>
        </div>
      </div>
    </form>
  );
};