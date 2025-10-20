import React from 'react';
import { Eye } from 'lucide-react';
import type { PatternDetailedExplanation } from '../../data/reactPatternsData';

interface PatternsDetailedExplanationProps {
  title: string;
  intro: string;
  patterns: PatternDetailedExplanation[];
}

export const PatternsDetailedExplanation: React.FC<PatternsDetailedExplanationProps> = ({
  title,
  intro,
  patterns
}) => {
  return (
    <div className="patterns-explanation">
      <h3>
        <Eye size={20} />
        {title}
      </h3>
      <p className="patterns-intro">
        {intro}
      </p>
      
      <div className="patterns-grid">
        {patterns.map((pattern) => {
          const IconComponent = pattern.icon;
          
          return (
            <div key={pattern.id} className="pattern-card detailed">
              <h4>
                <IconComponent size={18} />
                {pattern.title}
              </h4>
              <div className="pattern-explanation-content">
                <p><strong>¿Dónde lo ves?</strong> {pattern.whereToSee}</p>
                <p><strong>¿Cómo funciona?</strong> {pattern.howItWorks}</p>
                <ul>
                  {pattern.features.map((feature, index) => (
                    <li key={index}>
                      <code>{feature.split(' - ')[0]}</code>
                      {feature.includes(' - ') && ` - ${feature.split(' - ')[1]}`}
                    </li>
                  ))}
                </ul>
                <p><strong>¿Por qué es útil?</strong> {pattern.whyUseful}</p>
                <div className="code-example">
                  <code>{pattern.codeExample}</code>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};