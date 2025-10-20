import React from 'react';
import { Filter } from 'lucide-react';

interface FilterControlsProps {
  categoryFilter: string;
  difficultyFilter: string;
  onCategoryChange: (category: string) => void;
  onDifficultyChange: (difficulty: string) => void;
}

export const FilterControls: React.FC<FilterControlsProps> = ({
  categoryFilter,
  difficultyFilter,
  onCategoryChange,
  onDifficultyChange
}) => {
  return (
    <div className="filter-controls">
      <div className="filter-group">
        <Filter size={16} />
        <span className="filter-label">Filtros:</span>
      </div>
      
      <div className="filter-group">
        <label htmlFor="category-filter">Categoría:</label>
        <select
          id="category-filter"
          value={categoryFilter}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="filter-select"
        >
          <option value="all">Todas</option>
          <option value="performance">Performance</option>
          <option value="suspense">Suspense</option>
          <option value="concurrent">Concurrent</option>
          <option value="state-management">Estado</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="difficulty-filter">Dificultad:</label>
        <select
          id="difficulty-filter"
          value={difficultyFilter}
          onChange={(e) => onDifficultyChange(e.target.value)}
          className="filter-select"
        >
          <option value="all">Todas</option>
          <option value="intermediate">Intermedio</option>
          <option value="advanced">Avanzado</option>
          <option value="expert">Experto</option>
        </select>
      </div>
    </div>
  );
};