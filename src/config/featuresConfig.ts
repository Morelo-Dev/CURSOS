import {
    Atom,
    TypeIcon as TypeScript,
    Layers,
    Palette,
    Code,
    Bot
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface FeatureConfig {
    id: string;
    title: string;
    shortTitle: string;
    description: string;
    icon: LucideIcon;
    status: 'available' | 'coming-soon';
    techTags: string[];
    highlights: string[];
    actionText: string;
    route: string;
}

export const featuresConfig: FeatureConfig[] = [
    {
        id: 'react-patterns',
        title: 'Patrones de React',
        shortTitle: 'Patrones React',
        description: 'Implementación completa de patrones avanzados de React incluyendo Compound Components, Render Props, HOCs, Slot Composition y Custom Hooks.',
        icon: Atom,
        status: 'available',
        techTags: ['React 18', 'TypeScript', 'Vite', 'CSS3'],
        highlights: [
            '5 Patrones Implementados',
            'Gestor de Tareas Completo',
            'Ejemplos Interactivos'
        ],
        actionText: 'Explorar Patrones',
        route: 'react-patterns'
    },
    {
        id: 'react-typescript',
        title: 'React.js con TypeScript',
        shortTitle: 'React + TypeScript',
        description: 'Desarrollo avanzado con React y TypeScript, tipos personalizados, interfaces complejas y patrones de tipado para aplicaciones escalables.',
        icon: TypeScript,
        status: 'coming-soon',
        techTags: ['React 18', 'TypeScript', 'Vite'],
        highlights: ['Tipos Avanzados', 'Interfaces Complejas', 'Patrones de Tipado'],
        actionText: 'Explorar TypeScript',
        route: 'react-typescript'
    },
    {
        id: 'react-advanced',
        title: 'React Avanzado',
        shortTitle: 'React Avanzado',
        description: 'Técnicas avanzadas de React: optimización de rendimiento, Suspense, Concurrent Features, y arquitecturas complejas de estado.',
        icon: Layers,
        status: 'available',
        techTags: ['React 18', 'Suspense', 'Concurrent'],
        highlights: ['Optimización', 'Suspense', 'Concurrent Features'],
        actionText: 'Explorar React Avanzado',
        route: 'react-advanced'
    },
    {
        id: 'design-developers',
        title: 'Diseño para Developers',
        shortTitle: 'Diseño Dev',
        description: 'Principios de diseño, sistemas de design, CSS avanzado y herramientas para crear interfaces atractivas y funcionales.',
        icon: Palette,
        status: 'available',
        techTags: ['CSS3', 'Design Systems', 'UI/UX'],
        highlights: ['Design Systems', 'CSS Avanzado', 'UI/UX Principles'],
        actionText: 'Explorar Diseño',
        route: 'design-developers'
    },
    {
        id: 'clean-code-js',
        title: 'Clean Code y Buenas Prácticas',
        shortTitle: 'Clean Code',
        description: 'Código limpio, patrones de diseño, principios SOLID aplicados a JavaScript y mejores prácticas para desarrollo profesional.',
        icon: Code,
        status: 'available',
        techTags: ['JavaScript', 'Clean Code', 'SOLID'],
        highlights: ['Principios SOLID', 'Patrones de Diseño', 'Best Practices'],
        actionText: 'Explorar Clean Code',
        route: 'clean-code-js'
    },
    {
        id: 'ai-tools-developers',
        title: 'Herramientas de AI para Developers',
        shortTitle: 'AI Tools',
        description: 'Integración de herramientas de AI en el flujo de desarrollo, automatización inteligente y asistentes de código.',
        icon: Bot,
        status: 'available',
        techTags: ['AI Tools', 'Automation', 'Copilot'],
        highlights: ['GitHub Copilot', 'Automatización', 'AI Workflow'],
        actionText: 'Explorar AI Tools',
        route: 'ai-tools-developers'
    }
];

export const getFeatureByRoute = (route: string): FeatureConfig | undefined => {
    return featuresConfig.find(feature => feature.route === route);
};

export const getAvailableFeatures = (): FeatureConfig[] => {
    return featuresConfig.filter(feature => feature.status === 'available');
};

export const getComingSoonFeatures = (): FeatureConfig[] => {
    return featuresConfig.filter(feature => feature.status === 'coming-soon');
};