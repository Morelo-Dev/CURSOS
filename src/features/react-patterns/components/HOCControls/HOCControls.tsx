import React from 'react';

interface HOCControlsProps {
  isLoading: boolean;
  shouldError: boolean;
  onSetIsLoading: (loading: boolean) => void;
  onSetShouldError: (error: boolean) => void;
}

export const HOCControls: React.FC<HOCControlsProps> = ({
  isLoading,
  shouldError,
  onSetIsLoading,
  onSetShouldError
}) => {
  const handleTimedLoading = () => {
    onSetIsLoading(true);
    setTimeout(() => onSetIsLoading(false), 3000);
  };

  const getStateText = () => {
    if (isLoading) return 'Cargando...';
    if (shouldError) return 'Error activo';
    return 'Normal';
  };

  const getStateClass = () => {
    if (isLoading) return 'loading';
    if (shouldError) return 'error';
    return 'normal';
  };

  return (
    <div className="hoc-controls-inline">
      <div className="hoc-header-inline">
        <h4 className="hoc-controls-title">Simular HOCs</h4>
        <div className="current-state-inline">
          <span>Estado: </span>
          <span className={`state-indicator-inline ${getStateClass()}`}>
            {getStateText()}
          </span>
        </div>
      </div>
      
      <div className="hoc-buttons-inline">
        <button 
          onClick={() => onSetIsLoading(!isLoading)}
          className={`btn btn-sm ${isLoading ? 'btn-secondary' : 'btn-primary'}`}
          title="Activa el HOC withLoading para mostrar un spinner de carga"
        >
          {isLoading ? 'Ocultar Loading' : 'Loading'}
        </button>
        
        <button 
          onClick={() => onSetShouldError(!shouldError)}
          className={`btn btn-sm ${shouldError ? 'btn-secondary' : 'btn-warning'}`}
          title="Activa el HOC withErrorBoundary lanzando un error controlado"
        >
          {shouldError ? 'Resetear Error' : 'Simular Error'}
        </button>
        
        <button 
          onClick={handleTimedLoading}
          className="btn btn-sm btn-info"
          title="Muestra loading por 3 segundos para simular una carga real"
        >
          Loading 3s
        </button>
      </div>
    </div>
  );
};