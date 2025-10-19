export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  tags: string[];
  subtasks: Task[];
  createdAt: Date;
  dueDate?: Date;
}

export interface TaskFilter {
  priority?: 'low' | 'medium' | 'high';
  tag?: string;
  completed?: boolean;
  search?: string;
}

export type TaskSortBy = 'priority' | 'createdAt' | 'dueDate' | 'title';