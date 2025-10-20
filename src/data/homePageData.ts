import {
    Atom,
    Palette,
    Wrench,
    BookOpen,
    Star,
    Shield,
    Code
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { featuresConfig } from '../config/featuresConfig';

// Tipos para mejor tipado
export interface HeroFeature {
    icon: LucideIcon;
    text: string;
}

export interface Demonstration {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    status: 'available' | 'coming-soon';
    techTags: string[];
    highlights: string[];
    action: (() => void) | null;
    actionText: string;
}

export interface CreditInfo {
    id: string;
    icon: LucideIcon;
    title: string;
    content: React.ReactNode;
}

// Datos centralizados del Hero
export const heroFeatures: HeroFeature[] = [
    {
        icon: Atom,
        text: 'Patrones React Avanzados'
    },
    {
        icon: Palette,
        text: 'Diseño Responsive'
    },
    {
        icon: Wrench,
        text: 'TypeScript & Herramientas Modernas'
    },
    {
        icon: BookOpen,
        text: 'Código Documentado'
    }
];

// Tecnologías con información completa
export const technologies: Technology[] = [
    {
        name: 'React 18',
        url: 'https://react.dev/',
        className: 'react',
        description: 'Biblioteca de JavaScript para construir interfaces de usuario'
    },
    {
        name: 'TypeScript',
        url: 'https://www.typescriptlang.org/',
        className: 'typescript',
        description: 'Superset tipado de JavaScript que compila a JavaScript puro'
    },
    {
        name: 'Vite',
        url: 'https://vitejs.dev/',
        className: 'vite',
        description: 'Build tool ultrarrápido para desarrollo frontend moderno'
    },
    {
        name: 'Lucide React',
        url: 'https://lucide.dev/',
        className: 'lucide',
        description: 'Biblioteca de iconos hermosos y consistentes para React'
    },
    {
        name: 'CSS3',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        className: 'css',
        description: 'Lenguaje de hojas de estilo para el diseño web moderno'
    }
];

// Función para crear las demostraciones (necesita la función de navegación)
export const createDemonstrations = (navigationHandlers: Record<string, () => void>): Demonstration[] => {
    return featuresConfig.map(feature => ({
        id: feature.id,
        title: feature.title,
        description: feature.description,
        icon: feature.icon,
        status: feature.status,
        techTags: feature.techTags,
        highlights: feature.highlights,
        action: navigationHandlers[feature.id],
        actionText: feature.actionText
    }));
};

// Interfaz para tecnologías con información completa
export interface Technology {
    name: string;
    url: string;
    className: string;
    description: string;
}

// Datos básicos de créditos (sin JSX)
export interface CreditData {
    id: string;
    icon: LucideIcon;
    title: string;
    type: 'simple' | 'withLink' | 'withNote' | 'techStack';
    content?: string;
    linkUrl?: string;
    linkText?: string;
    note?: string;
    techStack?: string[];
    technologies?: Technology[];
}

export const creditsData: CreditData[] = [
    {
        id: 'project',
        icon: BookOpen,
        title: 'Proyecto Educativo',
        type: 'simple',
        content: 'Este proyecto fue desarrollado como showcase educativo interactivo para demostrar a mis compañeros de trabajo lo aprendido sobre Patrones Avanzados de React con TypeScript. Diseñado para ser una experiencia de aprendizaje práctica y visual.'
    },
    {
        id: 'developer',
        icon: Code,
        title: 'Desarrollado por',
        type: 'withLink',
        content: 'Morelo-Dev - Desarrollador Full Stack especializado en React y TypeScript',
        linkUrl: 'https://github.com/Morelo-Dev',
        linkText: 'Ver Perfil en GitHub'
    },
    {
        id: 'usage',
        icon: Star,
        title: 'Uso y Contribuciones',
        type: 'withNote',
        content: 'Si usas este proyecto como referencia para aprender estos patrones, considera darle una estrella en GitHub y comparte el conocimiento con otros developers.',
        note: 'Showcase de aprendizaje desarrollado para compartir conocimientos con el equipo'
    },
    {
        id: 'technologies',
        icon: Wrench,
        title: 'Tecnologías Utilizadas',
        type: 'techStack',
        technologies: technologies
    },
    {
        id: 'license',
        icon: Shield,
        title: 'Licencia MIT',
        type: 'simple',
        content: 'Este proyecto está disponible bajo la Licencia MIT. Siéntete libre de usar, modificar y distribuir el código para tus propios proyectos educativos.'
    }
];