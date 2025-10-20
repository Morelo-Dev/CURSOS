import { 
    Layers,
    RotateCcw,
    Theater,
    Palette,
    Zap
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Tipos centralizados
export type DemoType = 'compound' | 'renderProps' | 'hocs' | 'slots' | 'hooks' | null;

// Tipos para los datos de la página
export interface PatternOverview {
    id: 'compound' | 'renderProps' | 'hocs' | 'slots' | 'hooks';
    icon: LucideIcon;
    title: string;
    description: string;
    purpose: string;
    exampleCode: string;
}

export interface DemoSection {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    demoType: 'compound' | 'renderProps' | 'hocs' | 'slots' | 'hooks';
}

export interface PatternDetailedExplanation {
    id: string;
    icon: LucideIcon;
    title: string;
    whereToSee: string;
    howItWorks: string;
    features: string[];
    whyUseful: string;
    codeExample: string;
}

export interface ReactPatternsPageData {
    title: string;
    description: string;
    educationalIntro: string;
    patternOverviews: PatternOverview[];
    demoSections: DemoSection[];
    detailedExplanation: {
        title: string;
        intro: string;
        patterns: PatternDetailedExplanation[];
    };
}

// Datos centralizados de la página React Patterns
export const reactPatternsData: ReactPatternsPageData = {
    title: 'Patrones de React',
    description: 'Demostración completa de patrones avanzados: Compound Components, Render Props, HOCs, Slot Composition y Custom Hooks',
    educationalIntro: 'Los patrones de React son soluciones reutilizables a problemas comunes en el desarrollo. Cada patrón resuelve un problema específico y te ayuda a escribir código más limpio y mantenible.',
    
    patternOverviews: [
        {
            id: 'compound',
            icon: Layers,
            title: 'Compound Components',
            description: 'Un patrón donde varios componentes trabajan juntos como una unidad.',
            purpose: 'Para crear componentes flexibles y reutilizables.',
            exampleCode: '<Task><Task.Header /><Task.Body /></Task>'
        },
        {
            id: 'renderProps',
            icon: RotateCcw,
            title: 'Render Props',
            description: 'Pasar una función como prop que define qué renderizar.',
            purpose: 'Para compartir lógica entre componentes.',
            exampleCode: "renderTask={(task) => <CustomComponent />}"
        },
        {
            id: 'hocs',
            icon: Theater,
            title: 'Higher-Order Components (HOCs)',
            description: 'Una función que toma un componente y devuelve uno nuevo con funcionalidad añadida.',
            purpose: 'Para añadir funcionalidad como loading o manejo de errores.',
            exampleCode: 'withLoading(MiComponente)'
        },
        {
            id: 'slots',
            icon: Palette,
            title: 'Slot Composition',
            description: 'Definir "slots" o espacios donde se puede insertar contenido.',
            purpose: 'Para crear layouts flexibles y reutilizables.',
            exampleCode: '<Modal><Modal.Header /><Modal.Body /></Modal>'
        },
        {
            id: 'hooks',
            icon: Zap,
            title: 'Custom Hooks',
            description: 'Funciones personalizadas que encapsulan lógica de estado y efectos.',
            purpose: 'Para reutilizar lógica entre componentes de forma limpia.',
            exampleCode: 'const { tasks, addTask } = useTasks()'
        }
    ],

    demoSections: [
        {
            id: 'compound-demo',
            title: 'Demostración: Compound Components',
            description: 'Componente Task construido con el patrón Compound Components',
            icon: Layers,
            demoType: 'compound'
        },
        {
            id: 'render-props-demo',
            title: 'Demostración: Render Props',
            description: 'TaskList con flexibilidad total de renderizado',
            icon: RotateCcw,
            demoType: 'renderProps'
        },
        {
            id: 'hocs-demo',
            title: 'Demostración: Higher-Order Components',
            description: 'Componentes envueltos con funcionalidad adicional',
            icon: Theater,
            demoType: 'hocs'
        },
        {
            id: 'slots-demo',
            title: 'Demostración: Slot Composition',
            description: 'Modal con slots flexibles para contenido',
            icon: Palette,
            demoType: 'slots'
        },
        {
            id: 'hooks-demo',
            title: 'Demostración: Custom Hooks',
            description: 'Hooks personalizados para gestión de estado',
            icon: Zap,
            demoType: 'hooks'
        }
    ],

    detailedExplanation: {
        title: 'Patrones en Acción: ¿Cómo Funcionan Aquí?',
        intro: 'En esta aplicación de gestión de tareas, cada patrón resuelve un problema específico. Aquí te explicamos exactamente cómo y dónde se usan:',
        patterns: [
            {
                id: 'compound',
                icon: Layers,
                title: 'Compound Components',
                whereToSee: 'En cada tarea individual',
                howItWorks: 'La tarea se divide en partes independientes:',
                features: [
                    'Task.Header - Muestra título, prioridad y etiquetas',
                    'Task.Body - Muestra descripción y subtareas',
                    'Task.Footer - Muestra fechas',
                    'Task.Actions - Botones de acción'
                ],
                whyUseful: 'Puedes elegir qué partes mostrar y en qué orden',
                codeExample: '<Task><Task.Header /><Task.Body /></Task>'
            },
            {
                id: 'renderProps',
                icon: RotateCcw,
                title: 'Render Props',
                whereToSee: 'En la lista de tareas',
                howItWorks: 'TaskList recibe funciones que definen cómo renderizar:',
                features: [
                    'renderTask - Cómo mostrar cada tarea',
                    'renderEmpty - Qué mostrar si no hay tareas',
                    'renderHeader - Cómo mostrar el encabezado'
                ],
                whyUseful: 'El mismo componente puede mostrar contenido completamente diferente',
                codeExample: 'renderTask={(task) => <MiComponentePersonalizado />}'
            },
            {
                id: 'hocs',
                icon: Theater,
                title: 'Higher-Order Components (HOCs)',
                whereToSee: 'En la lista de tareas (prueba los botones arriba)',
                howItWorks: 'Dos HOCs envuelven TaskList:',
                features: [
                    'withLoading - Añade capacidad de mostrar loading',
                    'withErrorBoundary - Añade manejo de errores'
                ],
                whyUseful: 'Añades funcionalidad sin tocar el componente original',
                codeExample: 'withLoading(withErrorBoundary(TaskList))'
            },
            {
                id: 'slots',
                icon: Palette,
                title: 'Slot Composition',
                whereToSee: 'En el modal de "Nueva Tarea"',
                howItWorks: 'El modal tiene "slots" predefinidos:',
                features: [
                    'Modal.Header - Para el título y descripción',
                    'Modal.Body - Para el contenido principal',
                    'Modal.Footer - Para botones o información adicional'
                ],
                whyUseful: 'Layout consistente pero contenido flexible',
                codeExample: '<Modal><Modal.Header /><Modal.Body /></Modal>'
            },
            {
                id: 'hooks',
                icon: Zap,
                title: 'Custom Hooks',
                whereToSee: 'En toda la aplicación (aunque no visualmente)',
                howItWorks: 'Encapsulan lógica reutilizable:',
                features: [
                    'useTasks - Maneja todas las operaciones de tareas',
                    'useModal - Controla la apertura/cierre de modales'
                ],
                whyUseful: 'La misma lógica se puede usar en múltiples componentes',
                codeExample: 'const { tasks, addTask } = useTasks()'
            }
        ]
    }
};

// Configuración de filtros disponibles
export const taskFilters = [
    { id: 'all', label: 'Todas' },
    { id: 'completed', label: 'Completadas' },
    { id: 'pending', label: 'Pendientes' }
] as const;

export type TaskFilter = typeof taskFilters[number]['id'];