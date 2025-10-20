import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Layers, Lightbulb, Eye, Settings, TrendingUp } from 'lucide-react';
import { TechniqueCard } from './components/TechniqueCard';
import { TechniqueViewer } from './components/TechniqueViewer';
import { FilterControls } from './components/FilterControls';
import { useReactAdvancedPage } from './hooks/useReactAdvancedPage';
import './ReactAdvancedPage.css';

export const ReactAdvancedPage: React.FC = () => {
  const {
    state,
    filteredTechniques,
    currentTechnique,
    setActiveTechnique,
    setFilter,
    toggleMetrics
  } = useReactAdvancedPage();

  return (
    <div className="react-advanced-page">
      <Toaster position="top-right" />

      <div className="feature-header">
        <h1 className="feature-title">
          <Layers className="title-icon" />
          React Avanzado
        </h1>
        <p className="feature-description">
          Técnicas avanzadas de React: optimización de rendimiento, Suspense, Concurrent Features, 
          y arquitecturas complejas de estado para aplicaciones de producción.
        </p>
      </div>

      {/* Sección Educativa */}
      <div className="educational-section">
        <h2>
          <Lightbulb size={24} />
          ¿Por qué React Avanzado?
        </h2>
        <p className="educational-intro">
          React 18 introduce características revolucionarias como Concurrent Features y mejoras en Suspense 
          que permiten crear aplicaciones más responsivas y eficientes. Estas técnicas avanzadas son 
          esenciales para aplicaciones de gran escala y alta performance.
        </p>

        <div className="advanced-features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h4>Performance</h4>
            <p>Optimizaciones que marcan la diferencia en aplicaciones reales</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⏳</div>
            <h4>Suspense</h4>
            <p>Manejo declarativo de estados de carga y recursos asincrónicos</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h4>Concurrent</h4>
            <p>Actualizaciones no bloqueantes para interfaces más fluidas</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">�</div>
            <h4>Estado Complejo</h4>
            <p>Arquitecturas escalables para gestión de estado avanzada</p>
          </div>
        </div>

        <div className="react-18-highlights">
          <h3>Novedades de React 18</h3>
          <div className="highlights-grid">
            <div className="highlight-item">
              <strong>useTransition:</strong> Actualizaciones no urgentes que no bloquean la UI
            </div>
            <div className="highlight-item">
              <strong>useDeferredValue:</strong> Defer valores para mantener la responsividad
            </div>
            <div className="highlight-item">
              <strong>Suspense mejorado:</strong> Mejor soporte para data fetching y code splitting
            </div>
            <div className="highlight-item">
              <strong>Strict Mode:</strong> Detección más estricta de efectos secundarios
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Técnicas Avanzadas */}
      <div id="advanced-techniques" className="techniques-section">
        <h2>
          <Eye size={24} />
          Técnicas Avanzadas
        </h2>

        {/* Controles de Filtrado */}
        <FilterControls
          categoryFilter={state.filter.category}
          difficultyFilter={state.filter.difficulty}
          onCategoryChange={(category) => setFilter('category', category)}
          onDifficultyChange={(difficulty) => setFilter('difficulty', difficulty)}
        />

        <div className="techniques-container">
          {/* Lista de Técnicas */}
          <div className="techniques-list">
            <div className="list-header">
              <h3>
                <Settings size={20} />
                Técnicas ({filteredTechniques.length})
              </h3>
              <button 
                className={`metrics-toggle ${state.showMetrics ? 'active' : ''}`}
                onClick={toggleMetrics}
              >
                <TrendingUp size={16} />
                {state.showMetrics ? 'Ocultar' : 'Mostrar'} Métricas
              </button>
            </div>
            
            <div className="techniques-grid">
              {filteredTechniques.map(technique => (
                <TechniqueCard
                  key={technique.id}
                  technique={technique}
                  isActive={state.activeTechnique === technique.id}
                  onSelect={setActiveTechnique}
                />
              ))}
            </div>
            
            {filteredTechniques.length === 0 && (
              <div className="no-techniques">
                <p>No se encontraron técnicas con los filtros aplicados.</p>
                <button 
                  className="btn btn-secondary"
                  onClick={() => {
                    setFilter('category', 'all');
                    setFilter('difficulty', 'all');
                  }}
                >
                  Limpiar Filtros
                </button>
              </div>
            )}
          </div>

          {/* Visor de Técnicas */}
          <div className="technique-section">
            {currentTechnique ? (
              <TechniqueViewer technique={currentTechnique} />
            ) : (
              <div className="no-selection">
                <Layers size={48} />
                <h3>Selecciona una Técnica</h3>
                <p>
                  Haz clic en cualquier técnica avanzada para ver ejemplos 
                  de código, explicaciones detalladas y casos de uso.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sección de Recursos */}
      <div className="resources-section">
        <h2>Recursos Avanzados</h2>
        <div className="resources-grid">
          <a 
            href="https://react.dev/reference/react" 
            target="_blank" 
            rel="noopener noreferrer"
            className="resource-card"
          >
            <h4>React 18 Docs</h4>
            <p>Documentación oficial de React 18 con todas las nuevas características</p>
          </a>
          <a 
            href="https://react.dev/reference/react/Profiler" 
            target="_blank" 
            rel="noopener noreferrer"
            className="resource-card"
          >
            <h4>React Profiler</h4>
            <p>Herramienta oficial para medir performance de componentes</p>
          </a>
          <a 
            href="https://react.dev/reference/react/Suspense" 
            target="_blank" 
            rel="noopener noreferrer"
            className="resource-card"
          >
            <h4>Suspense Guide</h4>
            <p>Guía completa sobre Suspense y data fetching</p>
          </a>
          <a 
            href="https://react.dev/reference/react/useTransition" 
            target="_blank" 
            rel="noopener noreferrer"
            className="resource-card"
          >
            <h4>Concurrent Features</h4>
            <p>useTransition, useDeferredValue y las nuevas capacidades concurrentes</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReactAdvancedPage;