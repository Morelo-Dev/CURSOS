import React from 'react';
import type { PatternOverview } from '../../data/reactPatternsData';

interface PatternOverviewCardProps {
    pattern: PatternOverview;
    onNavigateToDemo: (demoId: PatternOverview['id']) => void;
}

export const PatternOverviewCard: React.FC<PatternOverviewCardProps> = ({ 
    pattern, 
    onNavigateToDemo 
}) => {
    const IconComponent = pattern.icon;

    return (
        <div className="pattern-overview-card">
            <div className="pattern-icon">
                <IconComponent size={32} />
            </div>
            <h3>{pattern.title}</h3>
            <p><strong>¿Qué es?</strong> {pattern.description}</p>
            <p><strong>¿Para qué sirve?</strong> {pattern.purpose}</p>
            <div className="example-code">
                <code>{pattern.exampleCode}</code>
            </div>
            <button 
                onClick={() => onNavigateToDemo(pattern.id)}
                className="demo-nav-btn"
            >
                Ver Demostración Interactiva
            </button>
        </div>
    );
};