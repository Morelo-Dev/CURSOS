import React from 'react';
import { Home, Atom, Rocket, GraduationCap } from 'lucide-react';
import './Header.css';

interface HeaderProps {
  currentFeature: string;
  onFeatureChange: (feature: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentFeature, onFeatureChange }) => {
  const features = [
    { id: 'home', label: 'Inicio', description: 'Página principal', icon: Home },
    { id: 'react-patterns', label: 'Patrones React', description: 'Patrones de Render y Composición', icon: Atom },
    { id: 'coming-soon', label: 'Próximamente', description: 'Más features próximamente', icon: Rocket }
  ];

  return (
    <header className="app-header">
      <div className="header-container">
        <div className="header-brand">
          <div className="brand-icon">
            <GraduationCap size={32} />
          </div>
          <div className="brand-text">
            <h1>Curso de Desarrollo</h1>
            <p>Proyectos y Patrones Avanzados</p>
          </div>
        </div>
        
        <nav className="header-nav">
          {features.map(feature => {
            const IconComponent = feature.icon;
            return (
              <button
                key={feature.id}
                className={`nav-item ${currentFeature === feature.id ? 'active' : ''}`}
                onClick={() => onFeatureChange(feature.id)}
                title={feature.description}
              >
                <IconComponent size={18} />
                <span>{feature.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};