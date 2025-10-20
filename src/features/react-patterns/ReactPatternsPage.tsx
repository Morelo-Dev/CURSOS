import React from 'react';
import { Toaster } from 'react-hot-toast';
import {
  Atom,
  Plus,
  FileText,
  Lightbulb,
  Eye,
  RefreshCw,
  Sparkles,
  Info,
  RotateCcw
} from 'lucide-react';
import { SearchBar } from '../../components/common';
import { Task } from './components/Task/Task';
import { TaskList } from './components/TaskList';
import { Modal } from './components/Modal';
import { CreateTaskForm } from './components/CreateTaskForm';
import { withLoading } from './components/withLoading';
import { withErrorBoundary } from './components/withErrorBoundary';
import { PatternOverviewCard } from './components/PatternOverviewCard';
import { PatternSelector } from './components/PatternSelector';
import { DemoContentRenderer } from './components/DemoContent';
import { PatternsDetailedExplanation } from './components/PatternsDetailedExplanation';
import { TasksHeader } from './components/TasksHeader';
import { useReactPatternsPage } from './hooks/useReactPatternsPage';
import type { Task as TaskType } from './types/task';
import './ReactPatternsPage.css';

const TaskListWithRetry: React.FC<{
  tasks: TaskType[];
  isLoading: boolean;
  shouldError: boolean;
  renderTask: (task: TaskType) => React.ReactNode;
  renderEmpty: () => React.ReactNode;
}> = ({ tasks, isLoading, shouldError, renderTask, renderEmpty }) => {
  const [isRetrying, setIsRetrying] = React.useState(false);
  const [internalShouldError, setInternalShouldError] = React.useState(shouldError);

  React.useEffect(() => {
    setInternalShouldError(shouldError);
  }, [shouldError]);

  const handleRetry = () => {
    setIsRetrying(true);
    setInternalShouldError(false);

    setTimeout(() => {
      setIsRetrying(false);
      setInternalShouldError(true);
    }, 2000);
  };

  const CustomErrorFallback: React.FC<{ error?: Error; resetError: () => void }> = ({ error }) => (
    <div className="error-boundary">
      <h2>
        <Info size={24} />
        ¡Error Simulado de HOC!
      </h2>
      <p>Este error fue lanzado intencionalmente para demostrar el HOC withErrorBoundary.</p>

      <details>
        <summary>Ver detalles del error</summary>
        <div style={{ whiteSpace: 'pre-wrap', marginTop: '0.5rem', fontSize: '0.9rem' }}>
          {error?.message}
        </div>
      </details>

      <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button onClick={handleRetry} className="btn btn-primary">
          <RotateCcw size={16} />
          Intentar de nuevo
        </button>
        <button
          onClick={() => window.location.reload()}
          className="btn btn-secondary"
        >
          <RefreshCw size={16} />
          Recargar página
        </button>
      </div>
    </div>
  );

  if (isRetrying) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Reintentando...</p>
      </div>
    );
  }

  const EnhancedTaskListInternal = withLoading(withErrorBoundary(TaskList, CustomErrorFallback));

  return (
    <EnhancedTaskListInternal
      tasks={tasks}
      isLoading={isLoading}
      shouldError={internalShouldError}
      renderTask={renderTask}
      renderEmpty={renderEmpty}
      renderHeader={() => null}
    />
  );
};

export const ReactPatternsPage: React.FC = () => {
  // Usar el hook personalizado para obtener toda la lógica y datos
  const {
    pageData,
    tasks,
    filter,
    setFilter,
    searchTerm,
    setSearchTerm,
    isLoading,
    shouldError,
    activeDemo,
    isModalOpen,
    openModal,
    closeModal,
    addTask,
    updateTask,
    deleteTask,
    addSubtask,
    removeSubtask,
    toggleTask,
    navigateToDemo,
    setActiveDemo,
    setIsLoading,
    setShouldError
  } = useReactPatternsPage();

  return (
    <div className="react-patterns-page">
      <Toaster position="top-right" />

      <div className="feature-header">
        <h1 className="feature-title">
          <Atom className="title-icon" />
          {pageData.title}
        </h1>
        <p className="feature-description">
          {pageData.description}
        </p>
      </div>

      {/* Sección Educativa */}
      <div className="educational-section">
        <h2>
          <Lightbulb size={24} />
          ¿Qué son los Patrones de React?
        </h2>
        <p className="educational-intro">
          {pageData.educationalIntro}
        </p>

        <div className="patterns-overview-cards">
          {pageData.patternOverviews.map((pattern) => (
            <PatternOverviewCard
              key={pattern.id}
              pattern={pattern}
              onNavigateToDemo={navigateToDemo}
            />
          ))}
        </div>


      </div>

      {/* Sección Unificada de Demostraciones Interactivas */}
      <div id="interactive-demos" className="unified-demo-section">
        <h2>
          <Eye size={24} />
          Demostración Interactiva
        </h2>

        {/* Selector de Patrones */}
        <PatternSelector
          activeDemo={activeDemo}
          onSetActiveDemo={setActiveDemo}
        />

        {/* Contenido de la Demostración Activa */}
        <DemoContentRenderer
          activeDemo={activeDemo}
          isLoading={isLoading}
          shouldError={shouldError}
          onSetIsLoading={setIsLoading}
          onSetShouldError={setShouldError}
        />
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

      {/* Header de tareas con controles HOCs integrados */}
      <TasksHeader
        tasks={tasks}
        filter={filter}
        isLoading={isLoading}
        shouldError={shouldError}
        onSetIsLoading={setIsLoading}
        onSetShouldError={setShouldError}
      />

      {/* Patrón: Render Props con HOCs */}
      <TaskListWithRetry
        tasks={tasks}
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
      />

      {/* Patrón: Slot Composition */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
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
      <PatternsDetailedExplanation
        title={pageData.detailedExplanation.title}
        intro={pageData.detailedExplanation.intro}
        patterns={pageData.detailedExplanation.patterns}
      />
    </div>
  );
};

export default ReactPatternsPage;