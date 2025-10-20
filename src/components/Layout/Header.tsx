import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Home, 
  Rocket, 
  GraduationCap, 
  ChevronDown,
  ChevronUp,
  Menu,
  X
} from 'lucide-react';
import { useNavigation } from '../../hooks/useNavigation';
import './Header.css';

interface HeaderProps {
  currentFeature: string;
}

export const Header: React.FC<HeaderProps> = ({ currentFeature }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const navigate = useNavigate();
  
  // Usar el hook centralizado para obtener las features
  const { getFeatures } = useNavigation();
  const demonstrations = getFeatures();

  const features = [
    { id: 'home', label: 'Inicio', description: 'Página principal', icon: Home, type: 'single' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCourses = () => setIsCoursesOpen(!isCoursesOpen);

  const handleFeatureSelect = (featureId: string) => {
    if (featureId === 'home') {
      navigate('/');
    } else {
      navigate(`/${featureId}`);
    }
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
                        className={`dropdown-item ${demo.status === 'coming-soon' ? 'coming-soon' : ''}`}
                        onClick={() => handleFeatureSelect(demo.route.replace('/', ''))}
                        title={demo.description}
                        disabled={demo.status === 'coming-soon'}
                      >
                        <IconComponent size={16} />
                        <span>{demo.shortTitle}</span>
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