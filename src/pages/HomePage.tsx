import React from 'react';
import './HomePage.css';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            🎓 Bienvenido al Curso de Desarrollo
          </h1>
          <p className="hero-subtitle">
            Proyectos prácticos, patrones avanzados y técnicas modernas de desarrollo
          </p>
          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon">⚛️</span>
              <span>Patrones React Avanzados</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🎨</span>
              <span>Diseño Responsive</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔧</span>
              <span>TypeScript & Herramientas Modernas</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📚</span>
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
              <span className="feature-emoji">⚛️</span>
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
                <span className="highlight-icon">🧩</span>
                <span>5 Patrones Implementados</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">📝</span>
                <span>Gestor de Tareas Completo</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🎯</span>
                <span>Ejemplos Interactivos</span>
              </div>
            </div>
          </div>

          <div className="feature-card coming-soon">
            <div className="feature-header">
              <span className="feature-emoji">🌐</span>
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
              <span className="feature-emoji">🎨</span>
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
              <span className="feature-emoji">🧪</span>
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
        <h2>🎯 Cómo Empezar</h2>
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

      <div className="tech-stack">
        <h2>🛠️ Tech Stack</h2>
        <div className="tech-items">
          <div className="tech-item">
            <span className="tech-icon">⚛️</span>
            <span className="tech-name">React 18</span>
            <span className="tech-desc">Hooks, Suspense, Concurrent Features</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">📘</span>
            <span className="tech-name">TypeScript</span>
            <span className="tech-desc">Tipado estático y mejor DX</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">⚡</span>
            <span className="tech-name">Vite</span>
            <span className="tech-desc">Build tool rápido y moderno</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🎨</span>
            <span className="tech-name">CSS3</span>
            <span className="tech-desc">Variables CSS, Grid, Flexbox</span>
          </div>
        </div>
      </div>
    </div>
  );
};