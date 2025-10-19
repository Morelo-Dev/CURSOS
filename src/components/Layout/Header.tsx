import React from 'react';
import './Header.css';

interface HeaderProps {
  currentFeature: string;
  onFeatureChange: (feature: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentFeature, onFeatureChange }) => {
  const features = [
    { id: 'home', label: '🏠 Inicio', description: 'Página principal' },
    { id: 'react-patterns', label: '⚛️ Patrones React', description: 'Patrones de Render y Composición' },
    { id: 'coming-soon', label: '🚀 Próximamente', description: 'Más features próximamente' }
  ];

  return (
    <header className="app-header">
      <div className="header-container">
        <div className="header-brand">
          <h1>🎓 Curso de Desarrollo</h1>
          <p>Proyectos y Patrones Avanzados</p>
        </div>
        
        <nav className="header-nav">
          {features.map(feature => (
            <button
              key={feature.id}
              className={`nav-item ${currentFeature === feature.id ? 'active' : ''}`}
              onClick={() => onFeatureChange(feature.id)}
              title={feature.description}
            >
              {feature.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};