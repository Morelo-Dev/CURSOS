import React, { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RotateCcw, RefreshCw } from 'lucide-react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.props.onError?.(error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error} resetError={this.resetError} />;
    }

    return this.props.children;
  }
}

const DefaultErrorFallback: React.FC<{ error?: Error; resetError: () => void }> = ({ 
  error, 
  resetError 
}) => (
  <div className="error-boundary">
    <h2>
      <AlertTriangle size={24} />
      ¡Oops! Algo salió mal
    </h2>
    <p>Se ha producido un error inesperado en la aplicación.</p>
    
    <details>
      <summary>Ver detalles del error</summary>
      <div style={{ whiteSpace: 'pre-wrap', marginTop: '0.5rem' }}>
        {error?.name}: {error?.message}
        {error?.stack && (
          <div style={{ marginTop: '1rem', fontSize: '0.75rem', opacity: 0.8 }}>
            Stack trace:
            {error.stack}
          </div>
        )}
      </div>
    </details>
    
    <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
      <button onClick={resetError}>
        <RotateCcw size={16} />
        Intentar de nuevo
      </button>
      <button 
        onClick={() => window.location.reload()} 
        style={{ 
          background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
          color: 'white'
        }}
      >
        <RefreshCw size={16} />
        Recargar página
      </button>
    </div>
  </div>
);

export function withErrorBoundary<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  errorFallback?: React.ComponentType<{ error?: Error; resetError: () => void }>,
  onError?: (error: Error, errorInfo: ErrorInfo) => void
) {
  const WithErrorBoundaryComponent = (props: P) => (
    <ErrorBoundary fallback={errorFallback} onError={onError}>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );

  WithErrorBoundaryComponent.displayName = `withErrorBoundary(${WrappedComponent.displayName || WrappedComponent.name})`;

  return WithErrorBoundaryComponent;
}

export default ErrorBoundary;