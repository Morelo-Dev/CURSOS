import { useState, useCallback, useMemo } from 'react';
import type { AdvancedTechnique, ReactAdvancedState, PerformanceDemo } from '../types';

// Datos de ejemplo para React Avanzado
const ADVANCED_TECHNIQUES: AdvancedTechnique[] = [
  {
    id: 'react-memo-optimization',
    title: 'React.memo y Optimización',
    description: 'Previene re-renderizados innecesarios usando React.memo de forma efectiva',
    category: 'performance',
    difficulty: 'intermediate',
    codeExample: `// ❌ Componente sin optimizar
const UserCard = ({ user, theme }) => {
  console.log('UserCard renderizado');
  return (
    <div className={\`user-card \${theme}\`}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
};

// ✅ Componente optimizado con React.memo
const UserCard = React.memo(({ user, theme }) => {
  console.log('UserCard renderizado');
  return (
    <div className={\`user-card \${theme}\`}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}, (prevProps, nextProps) => {
  // Comparación personalizada
  return prevProps.user.id === nextProps.user.id && 
         prevProps.theme === nextProps.theme;
});`,
    explanation: 'React.memo memoriza el resultado del componente y solo re-renderiza cuando las props cambian. Puedes proporcionar una función de comparación personalizada para mayor control.',
    benefits: [
      'Reduce renderizados innecesarios hasta 80%',
      'Mejora la responsividad de la UI',
      'Especialmente útil en listas grandes'
    ],
    useCases: [
      'Componentes de lista con muchos elementos',
      'Componentes que reciben props complejas',
      'Componentes hoja en árboles profundos'
    ]
  },
  {
    id: 'suspense-data-fetching',
    title: 'Suspense para Data Fetching',
    description: 'Manejo declarativo de estados de carga con Suspense y recursos',
    category: 'suspense',
    difficulty: 'advanced',
    codeExample: `// Crear un recurso suspendible
function createResource(promise) {
  let status = 'pending';
  let result;
  let suspender = promise.then(
    (r) => {
      status = 'success';
      result = r;
    },
    (e) => {
      status = 'error';
      result = e;
    }
  );
  
  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    }
  };
}

// Componente que usa Suspense
const UserProfile = ({ userId }) => {
  const userResource = createResource(fetchUser(userId));
  const user = userResource.read(); // Suspende si no está listo
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

// App principal
const App = () => (
  <Suspense fallback={<div>Cargando usuario...</div>}>
    <UserProfile userId={1} />
  </Suspense>
);`,
    explanation: 'Suspense permite manejar estados de carga de forma declarativa. Los componentes "suspenden" automáticamente mientras esperan datos, mostrando fallbacks elegantes.',
    benefits: [
      'Código más limpio sin useState para loading',
      'Mejor UX con loading states consistentes',
      'Composición natural de componentes async'
    ],
    useCases: [
      'Data fetching en componentes',
      'Lazy loading de recursos',
      'Code splitting avanzado'
    ]
  },
  {
    id: 'concurrent-features',
    title: 'Concurrent Features',
    description: 'Usa useTransition y useDeferredValue para interfaces más responsivas',
    category: 'concurrent',
    difficulty: 'advanced',
    codeExample: `import { useState, useTransition, useDeferredValue } from 'react';

const SearchResults = () => {
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();
  const deferredQuery = useDeferredValue(query);
  
  // Filtrado costoso que se puede deferir
  const results = useMemo(() => {
    if (!deferredQuery) return [];
    return largeDataset.filter(item => 
      item.name.toLowerCase().includes(deferredQuery.toLowerCase())
    );
  }, [deferredQuery]);
  
  const handleSearch = (value) => {
    setQuery(value); // Actualización urgente
    startTransition(() => {
      // Actualizaciones no urgentes
      setResults(filterResults(value));
    });
  };
  
  return (
    <div>
      <input 
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Buscar..."
      />
      {isPending && <div>Buscando...</div>}
      <div className={isPending ? 'loading' : ''}>
        {results.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};`,
    explanation: 'useTransition permite marcar actualizaciones como no urgentes, manteniendo la UI responsiva. useDeferredValue deferir valores para evitar bloqueos.',
    benefits: [
      'UI siempre responsiva durante búsquedas',
      'Mejor experiencia en dispositivos lentos',
      'Priorización automática de actualizaciones'
    ],
    useCases: [
      'Búsquedas en tiempo real',
      'Filtros complejos',
      'Interfaces con mucha interacción'
    ]
  },
  {
    id: 'usecallback-usememo',
    title: 'useCallback y useMemo Avanzado',
    description: 'Optimización inteligente de funciones y valores computados',
    category: 'performance',
    difficulty: 'intermediate',
    codeExample: `const ExpensiveComponent = ({ items, filter, onItemClick }) => {
  // ❌ Función recreada en cada render
  // const handleClick = (id) => onItemClick(id);
  
  // ✅ Función memoizada
  const handleClick = useCallback((id) => {
    onItemClick(id);
  }, [onItemClick]);
  
  // ❌ Cálculo costoso en cada render
  // const expensiveValue = items.filter(filter).reduce(...)
  
  // ✅ Valor memoizado
  const expensiveValue = useMemo(() => {
    console.log('Calculando valor costoso...');
    return items
      .filter(item => filter(item))
      .reduce((acc, item) => acc + item.value, 0);
  }, [items, filter]);
  
  // ✅ Lista memoizada para evitar re-renders
  const filteredItems = useMemo(() => 
    items.filter(filter), [items, filter]
  );
  
  return (
    <div>
      <h3>Total: {expensiveValue}</h3>
      {filteredItems.map(item => (
        <ItemCard 
          key={item.id} 
          item={item} 
          onClick={handleClick}
        />
      ))}
    </div>
  );
};`,
    explanation: 'useCallback memoriza funciones y useMemo memoriza valores. Úsalos cuando las dependencias cambien poco y el cálculo sea costoso.',
    benefits: [
      'Previene re-renders en componentes hijo',
      'Evita cálculos costosos innecesarios',
      'Mejora la performance en listas grandes'
    ],
    useCases: [
      'Funciones pasadas como props',
      'Cálculos complejos o filtros',
      'Componentes con muchos children'
    ]
  }
];

export const useReactAdvancedPage = () => {
  const [state, setState] = useState<ReactAdvancedState>({
    activeTechnique: null,
    techniques: ADVANCED_TECHNIQUES,
    isLoading: false,
    filter: {
      category: 'all',
      difficulty: 'all'
    },
    performanceMetrics: [],
    showMetrics: false
  });

  const filteredTechniques = useMemo(() => {
    return state.techniques.filter(technique => {
      const matchesCategory = state.filter.category === 'all' || 
                             technique.category === state.filter.category;
      const matchesDifficulty = state.filter.difficulty === 'all' || 
                               technique.difficulty === state.filter.difficulty;
      return matchesCategory && matchesDifficulty;
    });
  }, [state.techniques, state.filter]);

  const setActiveTechnique = useCallback((techniqueId: string | null) => {
    setState(prev => ({ ...prev, activeTechnique: techniqueId }));
  }, []);

  const setFilter = useCallback((filterType: 'category' | 'difficulty', value: string) => {
    setState(prev => ({
      ...prev,
      filter: { ...prev.filter, [filterType]: value }
    }));
  }, []);

  const toggleMetrics = useCallback(() => {
    setState(prev => ({ ...prev, showMetrics: !prev.showMetrics }));
  }, []);

  const addPerformanceMetric = useCallback((metric: PerformanceDemo) => {
    setState(prev => ({
      ...prev,
      performanceMetrics: [
        ...prev.performanceMetrics.filter(m => m.id !== metric.id),
        { ...metric, lastRenderTime: Date.now() }
      ].slice(-10) // Mantener solo los últimos 10
    }));
  }, []);

  const currentTechnique = useMemo(() => {
    return state.activeTechnique 
      ? state.techniques.find(t => t.id === state.activeTechnique)
      : null;
  }, [state.activeTechnique, state.techniques]);

  return {
    state,
    filteredTechniques,
    currentTechnique,
    setActiveTechnique,
    setFilter,
    toggleMetrics,
    addPerformanceMetric
  };
};