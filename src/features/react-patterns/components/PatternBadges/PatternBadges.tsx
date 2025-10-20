import React from 'react';

interface PatternBadge {
  id: string;
  label: string;
  className: string;
}

interface PatternBadgesProps {
  badges?: PatternBadge[];
}

const defaultBadges: PatternBadge[] = [
  { id: 'compound', label: 'Compound Components', className: 'compound' },
  { id: 'render-props', label: 'Render Props', className: 'render-props' },
  { id: 'hoc', label: 'HOCs', className: 'hoc' },
  { id: 'slots', label: 'Slot Composition', className: 'slots' },
  { id: 'hooks', label: 'Custom Hooks', className: 'hooks' }
];

export const PatternBadges: React.FC<PatternBadgesProps> = ({ 
  badges = defaultBadges 
}) => {
  return (
    <div className="patterns-info">
      {badges.map((badge) => (
        <span key={badge.id} className={`pattern-badge ${badge.className}`}>
          {badge.label}
        </span>
      ))}
    </div>
  );
};