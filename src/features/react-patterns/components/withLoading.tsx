import React from 'react';

interface WithLoadingProps {
  isLoading: boolean;
  loadingComponent?: React.ReactNode;
}

// HOC que envuelve un componente añadiendo funcionalidad de loading
export function withLoading<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithLoadingComponent = (props: P & WithLoadingProps) => {
    const { isLoading, loadingComponent, ...restProps } = props;

    if (isLoading) {
      return (
        <>
          {loadingComponent || (
            <div className="loading-spinner">
              <div className="spinner"></div>
              <p>Cargando...</p>
            </div>
          )}
        </>
      );
    }

    return <WrappedComponent {...(restProps as P)} />;
  };

  WithLoadingComponent.displayName = `withLoading(${WrappedComponent.displayName || WrappedComponent.name})`;

  return WithLoadingComponent;
}

// Componente de ejemplo usando el HOC
export const LoadingSpinner: React.FC = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
    <p>Cargando tareas...</p>
  </div>
);