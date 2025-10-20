import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { 
  Atom, 
  Plus, 
  FileText, 
  Sparkles, 
  Lightbulb, 
  Eye,
  Layers,
  RotateCcw,
  Theater,
  Palette,
  Zap,
  FileCheck,
  Check,
  Edit3,
  Trash2,
  MapPin,
  Info
} from 'lucide-react';
import { SearchBar } from '../../components/common';
import { Task } from './components/Task/Task';
import { TaskList } from './components/TaskList';
import { Modal } from './components/Modal';
import { CreateTaskForm } from './components/CreateTaskForm';
import { withLoading } from './components/withLoading';
import { withErrorBoundary } from './components/withErrorBoundary';
import { useTasks } from './hooks/useTasks';
import { useModal } from './hooks/useModal';
import type { Task as TaskType } from './types/task';
import './ReactPatternsPage.css';

// HOCs combinados para demostrar composición
const EnhancedTaskList = withLoading(withErrorBoundary(TaskList));

export const ReactPatternsPage: React.FC = () => {
  const {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    addSubtask,
    removeSubtask,
    toggleTask
  } = useTasks();

  const { isOpen, openModal, closeModal } = useModal();
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Estados para demostrar HOCs
  const [isLoading, setIsLoading] = useState(false);
  const [shouldError, setShouldError] = useState(false);
  
  // Estado para controlar qué sección de demostración mostrar
  const [activeDemo, setActiveDemo] = useState<'compound' | 'renderProps' | 'hocs' | 'slots' | 'hooks' | null>('compound');

  // Función para navegar a una demostración específica
  const navigateToDemo = (demo: 'compound' | 'renderProps' | 'hocs' | 'slots' | 'hooks') => {
    setActiveDemo(demo);
    // Scroll suave hacia la sección de demostraciones
    setTimeout(() => {
      const demoSection = document.getElementById('interactive-demos');
      if (demoSection) {
        demoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const filteredTasks = tasks.filter(task => {
    const matchesFilter = filter === 'all' || 
      (filter === 'completed' && task.completed) || 
      (filter === 'pending' && !task.completed);
    
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="react-patterns-page">
      <Toaster position="top-right" />
      
      <div className="feature-header">
        <h1 className="feature-title">
          <Atom className="title-icon" />
          Patrones de React
        </h1>
        <p className="feature-description">
          Demostración completa de patrones avanzados: Compound Components, Render Props, HOCs, Slot Composition y Custom Hooks
        </p>
      </div>

      {/* Sección Educativa */}
      <div className="educational-section">
        <h2>
          <Lightbulb size={24} />
          ¿Qué son los Patrones de React?
        </h2>
        <p className="educational-intro">
          Los patrones de React son soluciones reutilizables a problemas comunes en el desarrollo. 
          Cada patrón resuelve un problema específico y te ayuda a escribir código más limpio y mantenible.
        </p>
        
        <div className="patterns-overview-cards">
          <div className="pattern-overview-card">
            <div className="pattern-icon">
              <Layers size={32} />
            </div>
            <h3>Compound Components</h3>
            <p><strong>¿Qué es?</strong> Un patrón donde varios componentes trabajan juntos como una unidad.</p>
            <p><strong>¿Para qué sirve?</strong> Para crear componentes flexibles y reutilizables.</p>
            <div className="example-code">
              <code>&lt;Task&gt;&lt;Task.Header /&gt;&lt;Task.Body /&gt;&lt;/Task&gt;</code>
            </div>
            <button 
              onClick={() => navigateToDemo('compound')}
              className="demo-nav-btn"
            >
              Ver Demostración Interactiva
            </button>
          </div>

          <div className="pattern-overview-card">
            <div className="pattern-icon">
              <RotateCcw size={32} />
            </div>
            <h3>Render Props</h3>
            <p><strong>¿Qué es?</strong> Pasar una función como prop que define qué renderizar.</p>
            <p><strong>¿Para qué sirve?</strong> Para compartir lógica entre componentes.</p>
            <div className="example-code">
              <code>renderTask={'(task) => <CustomComponent />'}</code>
            </div>
            <button 
              onClick={() => navigateToDemo('renderProps')}
              className="demo-nav-btn"
            >
              Ver Demostración Interactiva
            </button>
          </div>

          <div className="pattern-overview-card">
            <div className="pattern-icon">
              <Theater size={32} />
            </div>
            <h3>Higher-Order Components (HOCs)</h3>
            <p><strong>¿Qué es?</strong> Una función que toma un componente y devuelve uno nuevo con funcionalidad añadida.</p>
            <p><strong>¿Para qué sirve?</strong> Para añadir funcionalidad como loading o manejo de errores.</p>
            <div className="example-code">
              <code>withLoading(MiComponente)</code>
            </div>
            <button 
              onClick={() => navigateToDemo('hocs')}
              className="demo-nav-btn"
            >
              Ver Demostración Interactiva
            </button>
          </div>

          <div className="pattern-overview-card">
            <div className="pattern-icon">
              <Palette size={32} />
            </div>
            <h3>Slot Composition</h3>
            <p><strong>¿Qué es?</strong> Definir "slots" o espacios donde se puede insertar contenido.</p>
            <p><strong>¿Para qué sirve?</strong> Para crear layouts flexibles y reutilizables.</p>
            <div className="example-code">
              <code>&lt;Modal&gt;&lt;Modal.Header /&gt;&lt;Modal.Body /&gt;&lt;/Modal&gt;</code>
            </div>
            <button 
              onClick={() => navigateToDemo('slots')}
              className="demo-nav-btn"
            >
              Ver Demostración Interactiva
            </button>
          </div>

          <div className="pattern-overview-card">
            <div className="pattern-icon">
              <Zap size={32} />
            </div>
            <h3>Custom Hooks</h3>
            <p><strong>¿Qué es?</strong> Funciones que encapsulan lógica de estado y efectos.</p>
            <p><strong>¿Para qué sirve?</strong> Para reutilizar lógica entre componentes.</p>
            <div className="example-code">
              <code>const {'{ tasks, addTask }'} = useTasks()</code>
            </div>
            <button 
              onClick={() => navigateToDemo('hooks')}
              className="demo-nav-btn"
            >
              Ver Demostración Interactiva
            </button>
          </div>
        </div>
      </div>

      {/* Sección Unificada de Demostraciones Interactivas */}
      <div id="interactive-demos" className="unified-demo-section">
        <h2>
          <Eye size={24} />
          Demostración Interactiva
        </h2>
        
        {/* Selector de Patrones */}
        <div className="pattern-selector">
          <button 
            onClick={() => setActiveDemo('compound')}
            className={`pattern-tab ${activeDemo === 'compound' ? 'active' : ''}`}
          >
            <Layers size={16} />
            Compound Components
          </button>
          <button 
            onClick={() => setActiveDemo('renderProps')}
            className={`pattern-tab ${activeDemo === 'renderProps' ? 'active' : ''}`}
          >
            <RotateCcw size={16} />
            Render Props
          </button>
          <button 
            onClick={() => setActiveDemo('hocs')}
            className={`pattern-tab ${activeDemo === 'hocs' ? 'active' : ''}`}
          >
            <Theater size={16} />
            HOCs
          </button>
          <button 
            onClick={() => setActiveDemo('slots')}
            className={`pattern-tab ${activeDemo === 'slots' ? 'active' : ''}`}
          >
            <Palette size={16} />
            Slot Composition
          </button>
          <button 
            onClick={() => setActiveDemo('hooks')}
            className={`pattern-tab ${activeDemo === 'hooks' ? 'active' : ''}`}
          >
            <Zap size={16} />
            Custom Hooks
          </button>
        </div>

        {/* Contenido de la Demostración Activa */}
        <div className="active-demo-content">
          {activeDemo === 'compound' && (
            <div className="demo-content">
              <h3>Compound Components en Acción</h3>
              <p>Los Compound Components permiten que múltiples componentes trabajen juntos como una unidad.</p>
              
              <div className="compound-demo">
                <p><strong>Modo Normal (Todo junto):</strong></p>
                  <div className="demo-task">
                    <div className="task-header"><FileCheck size={16} style={{display: 'inline'}} /> Tarea de ejemplo - ALTA - React, TypeScript</div>
                    <div className="task-body">Esta es una descripción de ejemplo - Subtarea 1 - Subtarea 2</div>
                    <div className="task-footer">Creada: hoy • Vencimiento: mañana</div>
                    <div className="task-actions"><Check size={16} style={{display: 'inline'}} /> <Edit3 size={16} style={{display: 'inline'}} /> <Trash2 size={16} style={{display: 'inline'}} /></div>
                  </div>                <p><strong>Modo Compound Components (Partes separadas):</strong></p>
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
          )}

          {activeDemo === 'renderProps' && (
            <div className="demo-content">
              <h3>Render Props en Acción</h3>
              <p>Render Props permite que un componente reciba funciones que definen qué y cómo renderizar.</p>
              
              <div className="render-props-demo">
                <p><strong>La misma TaskList con diferentes renderTask:</strong></p>
                
                <div className="render-example">
                  <h4>Render 1: Vista de Tarjetas (actual)</h4>
                  <div className="demo-render"><FileCheck size={16} style={{display: 'inline'}} /> Tarea completa con bordes y sombras</div>
                </div>
                
                <div className="render-example">
                  <h4>Render 2: Vista de Lista Simple</h4>
                  <div className="demo-render simple">- Tarea como elemento de lista</div>
                </div>
                
                <div className="render-example">
                  <h4>Render 3: Vista Compacta</h4>
                  <div className="demo-render compact"><FileCheck size={16} style={{display: 'inline'}} /> Título - Estado</div>
                </div>
                
                <div className="demo-benefit">
                  <strong><Lightbulb size={16} style={{display: 'inline'}} /> Ventaja:</strong> Un componente, múltiples presentaciones: 
                  <code>{'<TaskList renderTask={(task) => <MiVistaPersonalizada />} />'}</code>
                </div>
              </div>
            </div>
          )}

          {activeDemo === 'hocs' && (
            <div className="demo-content">
              <h3>Higher-Order Components en Acción</h3>
              <p>Los HOCs son funciones que toman un componente y devuelven un nuevo componente con funcionalidad adicional.</p>
              <div className="hoc-explanation">
                <div className="hoc-info-grid">
                  <div className="hoc-info-item">
                    <strong>withLoading:</strong> Añade funcionalidad de carga (loading) al componente
                  </div>
                  <div className="hoc-info-item">
                    <strong>withErrorBoundary:</strong> Añade manejo de errores al componente
                  </div>
                </div>
                <p>
                  <strong>Resultado:</strong> <code>withLoading(withErrorBoundary(TaskList))</code> = Un componente que puede mostrar loading Y manejar errores
                </p>
              </div>
              
              <div className="demo-controls">
                <button 
                  onClick={() => {
                    setIsLoading(!isLoading);
                    // Scroll hacia la lista de tareas para ver el efecto
                    setTimeout(() => {
                      const taskListElement = document.querySelector('.tasks-header');
                      if (taskListElement) {
                        taskListElement.scrollIntoView({ 
                          behavior: 'smooth', 
                          block: 'start',
                          inline: 'nearest'
                        });
                      }
                    }, 100);
                  }}
                  className={`btn ${isLoading ? 'btn-secondary' : 'btn-primary'}`}
                  title="Activa el HOC withLoading para mostrar un spinner de carga"
                >
                  {isLoading ? 'Ocultar Loading' : 'Mostrar Loading'}
                </button>
                
                <button 
                  onClick={() => {
                    setShouldError(!shouldError);
                    if (shouldError) {
                      setTimeout(() => {}, 10);
                    }
                    // Scroll hacia la lista de tareas para ver el efecto
                    setTimeout(() => {
                      const taskListElement = document.querySelector('.tasks-header');
                      if (taskListElement) {
                        taskListElement.scrollIntoView({ 
                          behavior: 'smooth', 
                          block: 'start',
                          inline: 'nearest'
                        });
                      }
                    }, 100);
                  }}
                  className={`btn ${shouldError ? 'btn-secondary' : 'btn-warning'}`}
                  title="Activa el HOC withErrorBoundary lanzando un error controlado"
                >
                  {shouldError ? 'Resetear Error' : 'Simular Error'}
                </button>
                
                <button 
                  onClick={() => {
                    setIsLoading(true);
                    setTimeout(() => setIsLoading(false), 3000);
                    // Scroll hacia la lista de tareas para ver el efecto
                    setTimeout(() => {
                      const taskListElement = document.querySelector('.tasks-header');
                      if (taskListElement) {
                        taskListElement.scrollIntoView({ 
                          behavior: 'smooth', 
                          block: 'start',
                          inline: 'nearest'
                        });
                      }
                    }, 100);
                  }}
                  className="btn btn-info"
                  title="Muestra loading por 3 segundos para simular una carga real"
                >
                  Loading 3 segundos
                </button>
              </div>
              
              <div className="current-state">
                <span className={`state-indicator ${isLoading ? 'loading' : shouldError ? 'error' : 'normal'}`}>
                  Estado actual: {isLoading ? 'Cargando...' : shouldError ? 'Error activo' : 'Normal'}
                </span>
              </div>
              
              <div className="demo-instruction">
                <p><strong><MapPin size={16} style={{display: 'inline'}} /> Instrucción:</strong> Al hacer clic en los botones, la vista se desplazará automáticamente hacia la lista de tareas para que puedas ver el efecto de los HOCs en acción.</p>
              </div>
            </div>
          )}

          {activeDemo === 'slots' && (
            <div className="demo-content">
              <h3>Slot Composition en Acción</h3>
              <p>Slot Composition define "espacios" o "slots" donde se puede insertar contenido específico.</p>
              
              <div className="slots-demo">
                <p><strong>Estructura del Modal (que usas cuando creas una tarea):</strong></p>
                
                <div className="modal-structure">
                  <div className="slot-section header-slot">
                    <div className="slot-label">Modal.Header</div>
                    <div className="slot-content"><Sparkles size={16} style={{display: 'inline'}} /> Crear Nueva Tarea<br/>Utiliza el formulario para crear una tarea</div>
                  </div>
                  
                  <div className="slot-section body-slot">
                    <div className="slot-label">Modal.Body</div>
                    <div className="slot-content">[Aquí va el formulario completo]<br/>Título, descripción, prioridad, etc.</div>
                  </div>
                  
                  <div className="slot-section footer-slot">
                    <div className="slot-label">Modal.Footer</div>
                    <div className="slot-content"><Lightbulb size={16} style={{display: 'inline'}} /> Puedes añadir subtareas y establecer prioridades</div>
                  </div>
                </div>
                
                <div className="demo-benefit">
                  <strong><Lightbulb size={16} style={{display: 'inline'}} /> Ventaja:</strong> Layout consistente, contenido flexible: 
                  <code>&lt;Modal&gt;&lt;Modal.Header&gt;Mi título&lt;/Modal.Header&gt;&lt;/Modal&gt;</code>
                </div>
              </div>
            </div>
          )}

          {activeDemo === 'hooks' && (
            <div className="demo-content">
              <h3>Custom Hooks en Acción</h3>
              <p>Los Custom Hooks encapsulan lógica de estado y efectos para reutilizarla entre componentes.</p>
              
              <div className="hooks-demo">
                <p><strong>Custom Hooks funcionando en esta página:</strong></p>
                
                <div className="hook-info">
                  <h4>useTasks()</h4>
                  <div className="hook-details">
                    <div className="hook-provides">
                      <strong>Proporciona:</strong>
                      <ul>
                        <li><FileCheck size={16} style={{display: 'inline'}} /> {tasks.length} tareas cargadas</li>
                        <li><Plus size={16} style={{display: 'inline'}} /> Función addTask</li>
                        <li><Edit3 size={16} style={{display: 'inline'}} /> Función updateTask</li>
                        <li><Trash2 size={16} style={{display: 'inline'}} /> Función deleteTask</li>
                        <li><Check size={16} style={{display: 'inline'}} /> Función toggleTask</li>
                      </ul>
                    </div>
                    <div className="hook-usage">
                      <strong>Se usa en:</strong> Esta página principal
                    </div>
                  </div>
                </div>
                
                <div className="hook-info">
                  <h4>useModal()</h4>
                  <div className="hook-details">
                    <div className="hook-provides">
                      <strong>Proporciona:</strong>
                      <ul>
                        <li><Eye size={16} style={{display: 'inline'}} /> Estado: {isOpen ? 'Modal Abierto' : 'Modal Cerrado'}</li>
                        <li><Plus size={16} style={{display: 'inline'}} /> Función openModal</li>
                        <li><FileText size={16} style={{display: 'inline'}} /> Función closeModal</li>
                      </ul>
                    </div>
                    <div className="hook-usage">
                      <strong>Se usa en:</strong> Modal de crear tarea
                    </div>
                  </div>
                </div>
                
                <div className="demo-benefit">
                  <strong><Lightbulb size={16} style={{display: 'inline'}} /> Ventaja:</strong> Lógica reutilizable en cualquier componente: 
                  <code>const {`{ tasks, addTask }`} = useTasks() // ¡Listo para usar!</code>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Controles y Filtros */}
      <div className="patterns-controls">
        <div className="controls-left">
          <button onClick={openModal} className="btn btn-primary">
            <Plus size={16} />
            Nueva Tarea
          </button>
          
          <div className="filter-buttons">
            {(['all', 'pending', 'completed'] as const).map(filterType => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`btn btn-sm ${filter === filterType ? 'btn-active' : 'btn-secondary'}`}
              >
                {filterType === 'all' ? 'Todas' : 
                 filterType === 'pending' ? 'Pendientes' : 'Completadas'}
              </button>
            ))}
          </div>
        </div>

        <SearchBar
          onSearch={setSearchTerm}
          placeholder="Buscar tareas..."
          value={searchTerm}
          showResultsLabel={searchTerm.length > 0}
          resultsLabel={(term) => `Mostrando resultados para: "${term}"`}
          className="search-box-enhanced"
        />
      </div>

      {/* Patrón: Render Props con HOCs */}
      <EnhancedTaskList
        tasks={filteredTasks}
        isLoading={isLoading}
        shouldError={shouldError}
        renderTask={(task: TaskType) => (
          <Task
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onEdit={updateTask}
            onDelete={deleteTask}
            onAddSubtask={addSubtask}
            onRemoveSubtask={removeSubtask}
          >
            {/* Patrón: Compound Components */}
            <Task.Header showPriority showTags />
            <Task.Body showDescription showSubtasks />
            <Task.Footer showDates />
            <Task.Actions showToggle showEdit showDelete />
          </Task>
        )}
        renderEmpty={() => (
          <div className="empty-state">
            <div className="empty-icon">
              <FileText size={48} />
            </div>
            <h3>No hay tareas</h3>
            <p>
              {filter === 'all' 
                ? 'Crea tu primera tarea para empezar'
                : filter === 'completed'
                ? 'No tienes tareas completadas aún'
                : 'No tienes tareas pendientes'
              }
            </p>
            <button onClick={openModal} className="btn btn-primary">
              <Plus size={16} />
              Crear Tarea
            </button>
          </div>
        )}
        renderHeader={(count: number) => (
          <div className="tasks-header">
            <h2>
              {filter === 'all' ? `Todas las tareas (${count})` :
               filter === 'completed' ? `Completadas (${count})` :
               `Pendientes (${count})`}
            </h2>
            <div className="patterns-info">
              <span className="pattern-badge compound">Compound Components</span>
              <span className="pattern-badge render-props">Render Props</span>
              <span className="pattern-badge hoc">HOCs</span>
              <span className="pattern-badge slots">Slot Composition</span>
              <span className="pattern-badge hooks">Custom Hooks</span>
            </div>
          </div>
        )}
      />

      {/* Patrón: Slot Composition */}
      <Modal isOpen={isOpen} onClose={closeModal}>
        <Modal.Header>
          <h2>
            <Sparkles size={20} />
            Crear Nueva Tarea
          </h2>
          <p>Utiliza el formulario para crear una tarea con subtareas</p>
        </Modal.Header>
        
        <Modal.Body>
          <CreateTaskForm onSave={addTask} onCancel={closeModal} />
        </Modal.Body>
        
        <Modal.Footer>
          <div className="modal-footer-info">
            <small>
              <Lightbulb size={14} />
              Puedes añadir subtareas y establecer prioridades
            </small>
          </div>
        </Modal.Footer>
      </Modal>

      {/* Información Detallada de Patrones */}
      <div className="patterns-explanation">
        <h3>
          <Eye size={20} />
          Patrones en Acción: ¿Cómo Funcionan Aquí?
        </h3>
        <p className="patterns-intro">
          En esta aplicación de gestión de tareas, cada patrón resuelve un problema específico. 
          Aquí te explicamos exactamente cómo y dónde se usan:
        </p>
        
        <div className="patterns-grid">
          <div className="pattern-card detailed">
            <h4>
              <Layers size={18} />
              Compound Components
            </h4>
            <div className="pattern-explanation-content">
              <p><strong>¿Dónde lo ves?</strong> En cada tarea individual</p>
              <p><strong>¿Cómo funciona?</strong> La tarea se divide en partes independientes:</p>
              <ul>
                <li><code>Task.Header</code> - Muestra título, prioridad y etiquetas</li>
                <li><code>Task.Body</code> - Muestra descripción y subtareas</li>
                <li><code>Task.Footer</code> - Muestra fechas</li>
                <li><code>Task.Actions</code> - Botones de acción</li>
              </ul>
              <p><strong>¿Por qué es útil?</strong> Puedes elegir qué partes mostrar y en qué orden</p>
              <div className="code-example">
                <code>&lt;Task&gt;&lt;Task.Header /&gt;&lt;Task.Body /&gt;&lt;/Task&gt;</code>
              </div>
            </div>
          </div>
          
          <div className="pattern-card detailed">
            <h4>
              <RotateCcw size={18} />
              Render Props
            </h4>
            <div className="pattern-explanation-content">
              <p><strong>¿Dónde lo ves?</strong> En la lista de tareas</p>
              <p><strong>¿Cómo funciona?</strong> TaskList recibe funciones que definen cómo renderizar:</p>
              <ul>
                <li><code>renderTask</code> - Cómo mostrar cada tarea</li>
                <li><code>renderEmpty</code> - Qué mostrar si no hay tareas</li>
                <li><code>renderHeader</code> - Cómo mostrar el encabezado</li>
              </ul>
              <p><strong>¿Por qué es útil?</strong> El mismo componente puede mostrar contenido completamente diferente</p>
              <div className="code-example">
                <code>{'renderTask={(task) => <MiComponentePersonalizado />}'}</code>
              </div>
            </div>
          </div>
          
          <div className="pattern-card detailed">
            <h4>
              <Theater size={18} />
              Higher-Order Components (HOCs)
            </h4>
            <div className="pattern-explanation-content">
              <p><strong>¿Dónde lo ves?</strong> En la lista de tareas (prueba los botones arriba)</p>
              <p><strong>¿Cómo funciona?</strong> Dos HOCs envuelven TaskList:</p>
              <ul>
                <li><code>withLoading</code> - Añade capacidad de mostrar loading</li>
                <li><code>withErrorBoundary</code> - Añade manejo de errores</li>
              </ul>
              <p><strong>¿Por qué es útil?</strong> Añades funcionalidad sin tocar el componente original</p>
              <div className="code-example">
                <code>withLoading(withErrorBoundary(TaskList))</code>
              </div>
            </div>
          </div>
          
          <div className="pattern-card detailed">
            <h4>
              <Palette size={18} />
              Slot Composition
            </h4>
            <div className="pattern-explanation-content">
              <p><strong>¿Dónde lo ves?</strong> En el modal de "Nueva Tarea"</p>
              <p><strong>¿Cómo funciona?</strong> El modal tiene "slots" predefinidos:</p>
              <ul>
                <li><code>Modal.Header</code> - Para el título y descripción</li>
                <li><code>Modal.Body</code> - Para el contenido principal</li>
                <li><code>Modal.Footer</code> - Para botones o información adicional</li>
              </ul>
              <p><strong>¿Por qué es útil?</strong> Layout consistente pero contenido flexible</p>
              <div className="code-example">
                <code>&lt;Modal&gt;&lt;Modal.Header /&gt;&lt;Modal.Body /&gt;&lt;/Modal&gt;</code>
              </div>
            </div>
          </div>
          
          <div className="pattern-card detailed">
            <h4>
              <Zap size={18} />
              Custom Hooks
            </h4>
            <div className="pattern-explanation-content">
              <p><strong>¿Dónde lo ves?</strong> En toda la aplicación (aunque no visualmente)</p>
              <p><strong>¿Cómo funciona?</strong> Encapsulan lógica reutilizable:</p>
              <ul>
                <li><code>useTasks</code> - Maneja todas las operaciones de tareas</li>
                <li><code>useModal</code> - Controla la apertura/cierre de modales</li>
              </ul>
              <p><strong>¿Por qué es útil?</strong> La misma lógica se puede usar en múltiples componentes</p>
              <div className="code-example">
                <code>const {`{ tasks, addTask }`} = useTasks()</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactPatternsPage;