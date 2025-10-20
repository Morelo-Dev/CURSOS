import React from 'react';
import { 
  TypeIcon as TypeScript, 
  Layers, 
  Palette, 
  Code, 
  Bot, 
  Calendar,
  CheckCircle,
  Clock,
  Star
} from 'lucide-react';
import './ComingSoonPage.css';

export const ComingSoonPage: React.FC = () => {
  const upcomingDemonstrations = [
    {
      id: 'react-typescript',
      title: 'React.js con TypeScript',
      description: 'Demostración de React con TypeScript para crear aplicaciones más robustas y escalables.',
      icon: TypeScript,
      status: 'En planificación',
      estimatedDate: 'Q1 2025',
      features: ['Types avanzados', 'Hooks tipados', 'Patrones con TS', 'Testing']
    },
    {
      id: 'react-advanced',
      title: 'React Avanzado',
      description: 'Técnicas avanzadas, optimización de performance, y arquitecturas escalables.',
      icon: Layers,
      status: 'En desarrollo',
      estimatedDate: 'Q2 2025',
      features: ['Performance', 'Micro-frontends', 'State Management', 'Arquitectura']
    },
    {
      id: 'design-developers',
      title: 'Diseño para Developers',
      description: 'Principios de diseño UI/UX aplicados por desarrolladores.',
      icon: Palette,
      status: 'En planificación',
      estimatedDate: 'Q2 2025',
      features: ['UI/UX', 'Design Systems', 'Figma', 'Responsive Design']
    },
    {
      id: 'clean-code-js',
      title: 'Clean Code y Buenas Prácticas con JavaScript',
      description: 'Código limpio, mantenible y escalable siguiendo las mejores prácticas.',
      icon: Code,
      status: 'En planificación',
      estimatedDate: 'Q3 2025',
      features: ['Clean Code', 'SOLID', 'Testing', 'Refactoring']
    },
    {
      id: 'ai-tools-developers',
      title: 'Herramientas de AI para Developers',
      description: 'Integración y aprovechamiento de herramientas de IA en el desarrollo.',
      icon: Bot,
      status: 'En investigación',
      estimatedDate: 'Q4 2025',
      features: ['GitHub Copilot', 'AI APIs', 'Automation', 'Productivity']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En desarrollo': return '#10b981';
      case 'En planificación': return '#f59e0b';
      case 'En investigación': return '#6366f1';
      default: return '#6b7280';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'En desarrollo': return <CheckCircle size={16} />;
      case 'En planificación': return <Calendar size={16} />;
      case 'En investigación': return <Clock size={16} />;
      default: return <Star size={16} />;
    }
  };

  return (
    <div className="coming-soon-page">
      <div className="coming-soon-header">
        <div className="header-content">
          <h1>
            <Bot size={32} />
            Próximas Demostraciones
          </h1>
          <p>Estamos trabajando en nuevas demostraciones especializadas para mostrar más aprendizajes en desarrollo web y tecnologías modernas.</p>
        </div>
      </div>

      <div className="courses-grid">
        {upcomingDemonstrations.map(demo => {
          const IconComponent = demo.icon;
          return (
            <div key={demo.id} className="course-card">
              <div className="course-header">
                <div className="course-icon">
                  <IconComponent size={24} />
                </div>
                <div 
                  className="course-status"
                  style={{ backgroundColor: getStatusColor(demo.status) }}
                >
                  {getStatusIcon(demo.status)}
                  <span>{demo.status}</span>
                </div>
              </div>
              
              <div className="course-content">
                <h3>{demo.title}</h3>
                <p>{demo.description}</p>
                
                <div className="course-features">
                  <h4>Incluirá:</h4>
                  <ul>
                    {demo.features.map(feature => (
                      <li key={feature}>
                        <CheckCircle size={14} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="course-footer">
                <div className="estimated-date">
                  <Calendar size={14} />
                  <span>Estimado: {demo.estimatedDate}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="current-progress">
        <div className="progress-card">
          <h2>
            <Star size={24} />
            Estado Actual del Showcase
          </h2>
          <div className="progress-items">
            <div className="progress-item completed">
              <CheckCircle size={20} />
              <span>Patrones de React - Completado y disponible para demostración</span>
            </div>
            <div className="progress-item in-progress">
              <Clock size={20} />
              <span>Planificación de nuevas demostraciones - En progreso</span>
            </div>
            <div className="progress-item pending">
              <Calendar size={20} />
              <span>Desarrollo de contenido adicional - Próximamente</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};