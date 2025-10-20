import React, { useState } from 'react';
import { 
  Home, 
  Atom, 
  Rocket, 
  GraduationCap, 
  TypeIcon as TypeScript,
  Layers,
  Palette,
  Code,
  Bot,
  ChevronDown,
  ChevronUp,
  Menu,
  X
} from 'lucide-react';
import './Header.css';

interface HeaderProps {
  currentFeature: string;
  onFeatureChange: (feature: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentFeature, onFeatureChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const features = [
    { id: 'home', label: 'Inicio', description: 'Página principal', icon: Home, type: 'single' }
  ];

  const demonstrations = [
    { id: 'react-patterns', label: 'Patrones de React', description: 'Disponible - Patrones avanzados implementados', icon: Atom, status: 'available' },
    { id: 'react-typescript', label: 'React.js con TypeScript', description: 'Próximamente', icon: TypeScript, status: 'coming-soon' },
    { id: 'react-advanced', label: 'React Avanzado', description: 'Próximamente', icon: Layers, status: 'coming-soon' },
    { id: 'design-developers', label: 'Diseño para Developers', description: 'Próximamente', icon: Palette, status: 'coming-soon' },
    { id: 'clean-code-js', label: 'Clean Code y Buenas Prácticas con JavaScript', description: 'Próximamente', icon: Code, status: 'coming-soon' },
    { id: 'ai-tools-developers', label: 'Herramientas de AI para Developers', description: 'Próximamente', icon: Bot, status: 'coming-soon' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCourses = () => setIsCoursesOpen(!isCoursesOpen);

  const handleFeatureSelect = (featureId: string) => {
    onFeatureChange(featureId);
    setIsMenuOpen(false);
    setIsCoursesOpen(false);
  };

  return (
    <header className="app-header">
      <div className="header-container">
        <div className="header-brand">
          <div className="brand-icon">
            <GraduationCap size={32} />
          </div>
          <div className="brand-text">
            <h1>Showcase de Desarrollo</h1>
            <p>Demostraciones y Patrones Avanzados</p>
          </div>
        </div>
        
        <nav className="header-nav">
          <button 
            className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div className={`nav-items ${isMenuOpen ? 'mobile-open' : ''}`}>
            {features.map(feature => {
              const IconComponent = feature.icon;
              return (
                <button
                  key={feature.id}
                  className={`nav-item ${currentFeature === feature.id ? 'active' : ''}`}
                  onClick={() => handleFeatureSelect(feature.id)}
                  title={feature.description}
                >
                  <IconComponent size={18} />
                  <span>{feature.label}</span>
                </button>
              );
            })}
            
            <div className="nav-dropdown">
              <button 
                className={`nav-item dropdown-trigger ${isCoursesOpen ? 'active' : ''}`}
                onClick={toggleCourses}
                aria-expanded={isCoursesOpen}
              >
                <Rocket size={18} />
                <span>Demostraciones</span>
                {isCoursesOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
              
              {isCoursesOpen && (
                <div className="dropdown-menu">
                  {demonstrations.map(demo => {
                    const IconComponent = demo.icon;
                    return (
                      <button
                        key={demo.id}
                        className="dropdown-item"
                        onClick={() => handleFeatureSelect(demo.id === 'react-patterns' ? 'react-patterns' : 'coming-soon')}
                        title={demo.description}
                      >
                        <IconComponent size={16} />
                        <span>{demo.label}</span>
                        <span className={`status-badge ${demo.status === 'available' ? 'available' : 'coming-soon'}`}>
                          {demo.status === 'available' ? 'Disponible' : 'Próximamente'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};