import React from 'react';
import { Code, BookOpen, CheckCircle, Target } from 'lucide-react';
import type { AdvancedTechnique } from '../types';

interface TechniqueViewerProps {
  technique: AdvancedTechnique;
}

export const TechniqueViewer: React.FC<TechniqueViewerProps> = ({ technique }) => {
  const [activeTab, setActiveTab] = React.useState<'code' | 'explanation' | 'benefits' | 'use-cases'>('code');

  return (
    <div className="technique-viewer">
      <div className="technique-viewer-header">
        <h3 className="viewer-title">{technique.title}</h3>
        <div className="viewer-tabs">
          <button 
            className={`tab-button ${activeTab === 'code' ? 'active' : ''}`}
            onClick={() => setActiveTab('code')}
          >
            <Code size={16} />
            Código
          </button>
          <button 
            className={`tab-button ${activeTab === 'explanation' ? 'active' : ''}`}
            onClick={() => setActiveTab('explanation')}
          >
            <BookOpen size={16} />
            Explicación
          </button>
          <button 
            className={`tab-button ${activeTab === 'benefits' ? 'active' : ''}`}
            onClick={() => setActiveTab('benefits')}
          >
            <CheckCircle size={16} />
            Beneficios
          </button>
          <button 
            className={`tab-button ${activeTab === 'use-cases' ? 'active' : ''}`}
            onClick={() => setActiveTab('use-cases')}
          >
            <Target size={16} />
            Casos de Uso
          </button>
        </div>
      </div>

      <div className="technique-viewer-content">
        {activeTab === 'code' && (
          <div className="code-container">
            <div className="code-header">
              <div className="code-language">React + TypeScript</div>
              <div className="code-category">{technique.category}</div>
            </div>
            <pre className="code-block">
              <code>{technique.codeExample}</code>
            </pre>
          </div>
        )}
        
        {activeTab === 'explanation' && (
          <div className="explanation-container">
            <div className="explanation-content">
              <p className="explanation-text">{technique.explanation}</p>
              <div className="technique-meta">
                <div className="meta-item">
                  <strong>Dificultad:</strong> {technique.difficulty}
                </div>
                <div className="meta-item">
                  <strong>Categoría:</strong> {technique.category}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'benefits' && (
          <div className="benefits-container">
            <h4>¿Por qué usar esta técnica?</h4>
            <ul className="benefits-list">
              {technique.benefits.map((benefit, index) => (
                <li key={index} className="benefit-item">
                  <CheckCircle size={16} />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {activeTab === 'use-cases' && (
          <div className="use-cases-container">
            <h4>Cuándo aplicar esta técnica:</h4>
            <ul className="use-cases-list">
              {technique.useCases.map((useCase, index) => (
                <li key={index} className="use-case-item">
                  <Target size={16} />
                  {useCase}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};