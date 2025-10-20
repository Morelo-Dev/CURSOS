import React from 'react';
import type { AdvancedTechnique } from '../types';

interface TechniqueCardProps {
  technique: AdvancedTechnique;
  isActive: boolean;
  onSelect: (id: string) => void;
}

export const TechniqueCard: React.FC<TechniqueCardProps> = ({
  technique,
  isActive,
  onSelect
}) => {
  const difficultyColors = {
    intermediate: 'var(--warning)',
    advanced: 'var(--danger)',
    expert: 'var(--purple)'
  };

  const categoryLabels = {
    performance: 'Performance',
    suspense: 'Suspense',
    concurrent: 'Concurrent',
    'state-management': 'Estado'
  };

  const categoryIcons = {
    performance: '⚡',
    suspense: '⏳',
    concurrent: '🔄',
    'state-management': '📊'
  };

  return (
    <div 
      className={`technique-card ${isActive ? 'active' : ''}`}
      onClick={() => onSelect(technique.id)}
    >
      <div className="technique-header">
        <div className="technique-icon">
          {categoryIcons[technique.category]}
        </div>
        <div className="technique-info">
          <h3 className="technique-title">{technique.title}</h3>
          <div className="technique-badges">
            <span 
              className="difficulty-badge"
              style={{ '--badge-color': difficultyColors[technique.difficulty] } as React.CSSProperties}
            >
              {technique.difficulty}
            </span>
            <span className="category-badge">
              {categoryLabels[technique.category]}
            </span>
          </div>
        </div>
      </div>
      
      <p className="technique-description">{technique.description}</p>
      
      <div className="technique-benefits">
        <h4>Beneficios clave:</h4>
        <ul>
          {technique.benefits.slice(0, 2).map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};