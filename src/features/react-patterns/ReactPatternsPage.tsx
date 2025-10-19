import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
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
        <h1 className="feature-title">⚛️ Patrones de React</h1>
        <p className="feature-description">
          Demostración completa de patrones avanzados: Compound Components, Render Props, HOCs, Slot Composition y Custom Hooks
        </p>
      </div>

      {/* Controles y Filtros */}
      <div className="patterns-controls">
        <div className="controls-left">
          <button onClick={openModal} className="btn btn-primary">
            + Nueva Tarea
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

        <div className="search-box">
          <input
            type="text"
            placeholder="Buscar tareas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {/* Patrón: Render Props con HOCs */}
      <EnhancedTaskList
        tasks={filteredTasks}
        isLoading={false}
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
            <div className="empty-icon">📝</div>
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
              + Crear Tarea
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
          <h2>✨ Crear Nueva Tarea</h2>
          <p>Utiliza el formulario para crear una tarea con subtareas</p>
        </Modal.Header>
        
        <Modal.Body>
          <CreateTaskForm onSave={addTask} onCancel={closeModal} />
        </Modal.Body>
        
        <Modal.Footer>
          <div className="modal-footer-info">
            <small>💡 Puedes añadir subtareas y establecer prioridades</small>
          </div>
        </Modal.Footer>
      </Modal>

      {/* Información de Patrones */}
      <div className="patterns-explanation">
        <h3>🔍 Patrones Implementados</h3>
        <div className="patterns-grid">
          <div className="pattern-card">
            <h4>🧩 Compound Components</h4>
            <p>Task.Header, Task.Body, Task.Footer, Task.Actions</p>
            <code>&lt;Task&gt;&lt;Task.Header /&gt;&lt;Task.Body /&gt;&lt;/Task&gt;</code>
          </div>
          
          <div className="pattern-card">
            <h4>🔄 Render Props</h4>
            <p>TaskList con renderTask, renderEmpty, renderHeader</p>
            <code>{'renderTask={(task) => <CustomComponent />}'}</code>
          </div>
          
          <div className="pattern-card">
            <h4>🎭 Higher-Order Components</h4>
            <p>withLoading y withErrorBoundary</p>
            <code>withLoading(withErrorBoundary(TaskList))</code>
          </div>
          
          <div className="pattern-card">
            <h4>🎨 Slot Composition</h4>
            <p>Modal.Header, Modal.Body, Modal.Footer</p>
            <code>&lt;Modal&gt;&lt;Modal.Header /&gt;&lt;/Modal&gt;</code>
          </div>
          
          <div className="pattern-card">
            <h4>🪝 Custom Hooks</h4>
            <p>useTasks, useModal</p>
            <code>const {`{tasks, addTask}`} = useTasks()</code>
          </div>
        </div>
      </div>
    </div>
  );
};