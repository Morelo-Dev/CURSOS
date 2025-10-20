import React from 'react';
import { 
  FileCheck, 
  Check, 
  Edit3, 
  Trash2, 
  Lightbulb
} from 'lucide-react';
import type { DemoType } from '../../data/reactPatternsData';

interface DemoContentRendererProps {
  activeDemo: DemoType;
  isLoading: boolean;
  shouldError: boolean;
  onSetIsLoading: (loading: boolean) => void;
  onSetShouldError: (error: boolean) => void;
}

export const DemoContentRenderer: React.FC<DemoContentRendererProps> = ({
  activeDemo,
  isLoading,
  shouldError,
  onSetIsLoading,
  onSetShouldError
}) => {
  
  const renderCompoundDemo = () => (
    <div className="demo-content">
      <h3>Compound Components en Acción</h3>
      <p>Los Compound Components permiten que múltiples componentes trabajen juntos como una unidad.</p>
      
      <div className="compound-demo">
        <p><strong>Modo Normal (Todo junto):</strong></p>
        <div className="demo-task">
          <div className="task-header">
            <FileCheck size={16} style={{display: 'inline'}} /> 
            Tarea de ejemplo - ALTA - React, TypeScript
          </div>
          <div className="task-body">
            Esta es una descripción de ejemplo - Subtarea 1 - Subtarea 2
          </div>
          <div className="task-footer">
            Creada: hoy • Vencimiento: mañana
          </div>
          <div className="task-actions">
            <Check size={16} style={{display: 'inline'}} /> 
            <Edit3 size={16} style={{display: 'inline'}} /> 
            <Trash2 size={16} style={{display: 'inline'}} />
          </div>
        </div>
        
        <p><strong>Modo Compound Components (Partes separadas):</strong></p>
        <div className="demo-task separated">
          <div className="task-header highlighted">Task.Header - Solo título y etiquetas</div>
          <div className="task-body highlighted">Task.Body - Solo descripción y subtareas</div>
          <div className="task-footer highlighted">Task.Footer - Solo fechas</div>
          <div className="task-actions highlighted">Task.Actions - Solo botones</div>
        </div>
        
        <div className="demo-benefit">
          <strong><Lightbulb size={16} style={{display: 'inline'}} /> Ventaja:</strong> Puedes usar solo las partes que necesites: 
          <code>&lt;Task&gt;&lt;Task.Header /&gt;&lt;Task.Actions /&gt;&lt;/Task&gt;</code>
        </div>
      </div>
    </div>
  );

  const renderRenderPropsDemo = () => (
    <div className="demo-content">
      <h3>Render Props en Acción</h3>
      <p>Render Props permite que un componente reciba funciones que definen qué y cómo renderizar.</p>
      
      <div className="render-props-demo">
        <p><strong>La misma TaskList con diferentes renderTask:</strong></p>
        {/* Contenido de la demo será completado */}
      </div>
    </div>
  );

  const renderHOCsDemo = () => (
    <div className="demo-content">
      <h3>Higher-Order Components en Acción</h3>
      <p>Los HOCs añaden funcionalidad a componentes existentes sin modificarlos.</p>
      
      <div className="hocs-demo">
        <p><strong>Controles para HOCs:</strong></p>
        <div className="hoc-controls">
          <label>
            <input 
              type="checkbox" 
              checked={isLoading} 
              onChange={(e) => onSetIsLoading(e.target.checked)} 
            />
            Simular Loading
          </label>
          <label>
            <input 
              type="checkbox" 
              checked={shouldError} 
              onChange={(e) => onSetShouldError(e.target.checked)} 
            />
            Simular Error
          </label>
        </div>
        {/* Contenido de la demo será completado */}
      </div>
    </div>
  );

  const renderSlotsDemo = () => (
    <div className="demo-content">
      <h3>Slot Composition en Acción</h3>
      <p>Slot Composition permite crear layouts flexibles definiendo espacios específicos para contenido.</p>
      
      <div className="slots-demo">
        <p><strong>Modal con diferentes slots:</strong></p>
        {/* Contenido de la demo será completado */}
      </div>
    </div>
  );

  const renderHooksDemo = () => (
    <div className="demo-content">
      <h3>Custom Hooks en Acción</h3>
      <p>Los Custom Hooks encapsulan y reutilizan lógica de estado entre componentes.</p>
      
      <div className="hooks-demo">
        <p><strong>useTasks() en acción:</strong></p>
        {/* Contenido de la demo será completado */}
      </div>
    </div>
  );

  const demoRenderers = {
    compound: renderCompoundDemo,
    renderProps: renderRenderPropsDemo,
    hocs: renderHOCsDemo,
    slots: renderSlotsDemo,
    hooks: renderHooksDemo
  };

  const renderDemo = activeDemo ? demoRenderers[activeDemo as keyof typeof demoRenderers] : null;
  
  return (
    <div className="active-demo-content">
      {renderDemo ? renderDemo() : (
        <div className="demo-content">
          <p>Selecciona un patrón para ver su demostración.</p>
        </div>
      )}
    </div>
  );
};