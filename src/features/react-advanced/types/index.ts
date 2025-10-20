// Tipos para React Avanzado
export interface AdvancedTechnique {
  id: string;
  title: string;
  description: string;
  category: 'performance' | 'suspense' | 'concurrent' | 'state-management';
  difficulty: 'intermediate' | 'advanced' | 'expert';
  codeExample: string;
  explanation: string;
  benefits: string[];
  useCases: string[];
}

export interface PerformanceDemo {
  id: string;
  name: string;
  renderCount: number;
  lastRenderTime: number;
  isOptimized: boolean;
}

export interface ReactAdvancedState {
  activeTechnique: string | null;
  techniques: AdvancedTechnique[];
  isLoading: boolean;
  filter: {
    category: string;
    difficulty: string;
  };
  performanceMetrics: PerformanceDemo[];
  showMetrics: boolean;
}

// Tipos específicos para Suspense
export interface SuspenseResource<T> {
  read(): T;
}

// Tipos para Concurrent Features
export interface TransitionState {
  isPending: boolean;
  startTransition: (callback: () => void) => void;
}

export interface DeferredValue<T> {
  value: T;
  isPending: boolean;
}