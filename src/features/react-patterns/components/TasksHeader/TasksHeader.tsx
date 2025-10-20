import React from 'react';
import { PatternBadges } from '../PatternBadges';
import { HOCControls } from '../HOCControls';
import type { Task } from '../../types/task';

interface TasksHeaderProps {
  tasks: Task[];
  filter: 'all' | 'pending' | 'completed';
  isLoading: boolean;
  shouldError: boolean;
  onSetIsLoading: (loading: boolean) => void;
  onSetShouldError: (error: boolean) => void;
}

export const TasksHeader: React.FC<TasksHeaderProps> = ({
  tasks,
  filter,
  isLoading,
  shouldError,
  onSetIsLoading,
  onSetShouldError
}) => {
  const getTaskCountText = () => {
    switch (filter) {
      case 'all':
        return `Todas las tareas (${tasks.length})`;
      case 'completed':
        return `Completadas (${tasks.filter(t => t.completed).length})`;
      case 'pending':
        return `Pendientes (${tasks.filter(t => !t.completed).length})`;
      default:
        return `Todas las tareas (${tasks.length})`;
    }
  };

  return (
    <div className="tasks-header">
      <div className="tasks-header-content">
        <div className="tasks-header-left">
          <h2>{getTaskCountText()}</h2>
          <PatternBadges />
        </div>
        
        <HOCControls
          isLoading={isLoading}
          shouldError={shouldError}
          onSetIsLoading={onSetIsLoading}
          onSetShouldError={onSetShouldError}
        />
      </div>
    </div>
  );
};