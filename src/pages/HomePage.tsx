import React from 'react';
import { GraduationCap, Atom, Palette, Wrench, BookOpen, Globe, TestTube, Layers, Github, Heart, Star, Code, Shield, Users, Target } from 'lucide-react';
import './HomePage.css';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-icon">
            <GraduationCap size={64} />
          </div>
          <h1 className="hero-title">
            Bienvenido al Curso de Desarrollo
          </h1>
          <p className="hero-subtitle">
            Proyectos prácticos, patrones avanzados y técnicas modernas de desarrollo
          </p>
          <div className="hero-features">
            <div className="feature-item">
              <div className="feature-icon">
                <Atom size={20} />
              </div>
              <span>Patrones React Avanzados</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <Palette size={20} />
              </div>
              <span>Diseño Responsive</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <Wrench size={20} />
              </div>
              <span>TypeScript & Herramientas Modernas</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <BookOpen size={20} />
              </div>
              <span>Código Documentado</span>
            </div>
          </div>
        </div>
      </div>

      <div className="features-overview">
        <h2>🚀 Features Disponibles</h2>
        <div className="features-grid">
          <div className="feature-card active">
            <div className="feature-header">
              <div className="feature-emoji">
                <Atom size={32} />
              </div>
              <h3>Patrones de React</h3>
              <span className="status-badge ready">Disponible</span>
            </div>
            <p>
              Implementación completa de patrones avanzados de React incluyendo 
              Compound Components, Render Props, HOCs, Slot Composition y Custom Hooks.
            </p>
            <div className="feature-tech">
              <span className="tech-tag">React 18</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">Vite</span>
              <span className="tech-tag">CSS3</span>
            </div>
            <div className="feature-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <Layers size={16} />
                </div>
                <span>5 Patrones Implementados</span>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">
                  <BookOpen size={16} />
                </div>
                <span>Gestor de Tareas Completo</span>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">
                  <Wrench size={16} />
                </div>
                <span>Ejemplos Interactivos</span>
              </div>
            </div>
          </div>

          <div className="feature-card coming-soon">
            <div className="feature-header">
              <div className="feature-emoji">
                <Globe size={32} />
              </div>
              <h3>API & Estado Global</h3>
              <span className="status-badge soon">Próximamente</span>
            </div>
            <p>
              Gestión de estado global, integración con APIs REST, cache, 
              optimistic updates y patrones de fetching avanzados.
            </p>
            <div className="feature-tech">
              <span className="tech-tag">React Query</span>
              <span className="tech-tag">Zustand</span>
              <span className="tech-tag">Axios</span>
            </div>
          </div>

          <div className="feature-card coming-soon">
            <div className="feature-header">
              <div className="feature-emoji">
                <Palette size={32} />
              </div>
              <h3>Design Systems</h3>
              <span className="status-badge soon">Próximamente</span>
            </div>
            <p>
              Creación de un design system completo con componentes reutilizables, 
              tokens de diseño y documentación interactiva.
            </p>
            <div className="feature-tech">
              <span className="tech-tag">Storybook</span>
              <span className="tech-tag">Styled Components</span>
              <span className="tech-tag">Design Tokens</span>
            </div>
          </div>

          <div className="feature-card coming-soon">
            <div className="feature-header">
              <div className="feature-emoji">
                <TestTube size={32} />
              </div>
              <h3>Testing Avanzado</h3>
              <span className="status-badge soon">Próximamente</span>
            </div>
            <p>
              Testing integral con unit tests, integration tests, E2E testing 
              y visual regression testing.
            </p>
            <div className="feature-tech">
              <span className="tech-tag">Vitest</span>
              <span className="tech-tag">Testing Library</span>
              <span className="tech-tag">Playwright</span>
            </div>
          </div>
        </div>
      </div>

      <div className="getting-started">
        <h2>
          <Target size={24} />
          Cómo Empezar
        </h2>
        <div className="steps-grid">
          <div className="step-item">
            <div className="step-number">1</div>
            <h3>Explora el Header</h3>
            <p>Usa la navegación del header para moverte entre diferentes features y proyectos.</p>
          </div>
          <div className="step-item">
            <div className="step-number">2</div>
            <h3>Estudia los Patrones</h3>
            <p>Comienza con "Patrones React" para ver implementaciones reales de patrones avanzados.</p>
          </div>
          <div className="step-item">
            <div className="step-number">3</div>
            <h3>Experimenta</h3>
            <p>Modifica el código, crea nuevas features y practica con los ejemplos interactivos.</p>
          </div>
          <div className="step-item">
            <div className="step-number">4</div>
            <h3>Construye</h3>
            <p>Usa lo aprendido para crear tus propios proyectos y patrones personalizados.</p>
          </div>
        </div>
      </div>

      {/* Sección de Créditos y Licencia */}
      <div className="credits-section">
        <div className="credits-content">
          <h2>
            <Heart size={24} />
            Créditos y Licencia
          </h2>
          <div className="credits-info">
            <div className="credit-item">
              <div className="credit-header">
                <BookOpen size={20} />
                <h3>Proyecto Educativo</h3>
              </div>
              <p>
                Este proyecto fue desarrollado como material educativo interactivo para aprender 
                <strong> Patrones Avanzados de React</strong> con TypeScript. Diseñado para ser una 
                experiencia de aprendizaje práctica y visual.
              </p>
            </div>
            
            <div className="credit-item">
              <div className="credit-header">
                <Code size={20} />
                <h3>Desarrollado por</h3>
              </div>
              <p>
                <strong>Morelo-Dev</strong> - Desarrollador Full Stack especializado en React y TypeScript
              </p>
              <a 
                href="https://github.com/Morelo-Dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-link"
              >
                <Github size={16} />
                Ver Perfil en GitHub
              </a>
            </div>
            
            <div className="credit-item">
              <div className="credit-header">
                <Star size={20} />
                <h3>Uso y Contribuciones</h3>
              </div>
              <p>
                Si usas este proyecto como referencia o base para tu aprendizaje, 
                por favor considera darle una estrella en GitHub y mencionar los créditos correspondientes.
              </p>
              <div className="usage-note">
                <strong>Atribución sugerida:</strong> 
                <code>"Basado en ComposiTasks por @Morelo-Dev"</code>
              </div>
            </div>
            
            <div className="credit-item">
              <div className="credit-header">
                <Wrench size={20} />
                <h3>Tecnologías Utilizadas</h3>
              </div>
              <div className="tech-stack">
                <a 
                  href="https://react.dev/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="tech-badge react"
                >
                  React 18
                </a>
                <a 
                  href="https://www.typescriptlang.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="tech-badge typescript"
                >
                  TypeScript
                </a>
                <a 
                  href="https://vitejs.dev/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="tech-badge vite"
                >
                  Vite
                </a>
                <a 
                  href="https://lucide.dev/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="tech-badge lucide"
                >
                  Lucide React
                </a>
                <a 
                  href="https://developer.mozilla.org/es/docs/Web/CSS" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="tech-badge css"
                >
                  CSS3
                </a>
              </div>
            </div>
            
            <div className="credit-item">
              <div className="credit-header">
                <Shield size={20} />
                <h3>Licencia MIT</h3>
              </div>
              <p>
                Este proyecto está disponible bajo la <strong>MIT License</strong>. 
                Puedes usarlo libremente para fines educativos y comerciales, 
                manteniendo la atribución correspondiente.
              </p>
              <div className="license-actions">
                <a 
                  href="https://github.com/Morelo-Dev/CURSOS" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="repo-link"
                >
                  <Github size={16} />
                  Ver Repositorio
                </a>
                <a 
                  href="https://github.com/Morelo-Dev/CURSOS/blob/main/LICENSE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="license-link"
                >
                  <Shield size={16} />
                  Ver Licencia
                </a>
              </div>
            </div>
            
            <div className="credit-item community">
              <div className="credit-header">
                <Users size={20} />
                <h3>Comunidad</h3>
              </div>
              <p>
                Gracias a la comunidad de desarrolladores que hace posible proyectos educativos como este.
              </p>
              <div className="community-note">
                <Star size={16} />
                <span>Si te gustó este proyecto, ¡dale una estrella!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};