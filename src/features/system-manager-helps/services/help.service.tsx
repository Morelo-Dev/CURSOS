// import type { HelpLink, HelpLinkCreate } from '..';
// import api from './api';

import type { HelpLink, HelpLinkCreate } from "..";

// export const helpService = {
//     getAll: async (): Promise<HelpLink[]> => {
//         const response = await api.get('/api/help-links');
//         return response.data;
//     },

//     getByRoute: async (routePath: string): Promise<HelpLink | null> => {
//         const response = await api.get(`/api/help-links/route`, {
//             params: { path: routePath }
//         });
//         return response.data;
//     },

//     create: async (data: HelpLinkCreate): Promise<HelpLink> => {
//         const response = await api.post('/api/help-links', data);
//         return response.data;
//     },

//     update: async (id: number, data: Partial<HelpLinkCreate>): Promise<HelpLink> => {
//         const response = await api.put(`/api/help-links/${id}`, data);
//         return response.data;
//     },

//     delete: async (id: number): Promise<void> => {
//         await api.delete(`/api/help-links/${id}`);
//     },

//     getActiveRoutes: async (): Promise<string[]> => {
//         const response = await api.get('/api/help-links/routes');
//         return response.data;
//     }
// };

const STORAGE_KEY = 'sinai_help_links';

const getInitialData = (): HelpLink[] => [
    {
        id: 1,
        routePath: '/Planeacion/PrescolarDBA/MatrizInstitucional',
        title: 'Matriz Institucional',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        documentUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        manualUrl: 'https://sinai.edu.co/manual/matriz',
        faqUrl: 'https://sinai.edu.co/faq/matriz',
        contactEmail: 'soporte@sinai.edu.co',
        whatsappNumber: '+573001234567',
        isActive: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 2,
        routePath: '/Planeacion/PrescolarDBA/DBAEvidencia',
        title: 'DBA y Evidencia',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        documentUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        manualUrl: 'https://sinai.edu.co/manual/dba',
        isActive: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 3,
        routePath: '/Planeacion/PrescolarDBA/PlaneacionPeriodica',
        title: 'Planeación Periódica',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        documentUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        isActive: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 4,
        routePath: '/Planeacion/PrescolarDBA/Valoracion',
        title: 'Valoración',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        manualUrl: 'https://sinai.edu.co/manual/valoracion',
        faqUrl: 'https://sinai.edu.co/faq/valoracion',
        contactEmail: 'soporte@sinai.edu.co',
        isActive: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 5,
        routePath: '/Planeacion/PrescolarDBA/DetalleEstudiante',
        title: 'Detalle Estudiante',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        documentUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        whatsappNumber: '+573001234567',
        isActive: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
];

const loadFromStorage = (): HelpLink[] => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        return JSON.parse(stored);
    }
    const initial = getInitialData();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    return initial;
};

const saveToStorage = (data: HelpLink[]): void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const helpService = {
    getAll: async (): Promise<HelpLink[]> => {
        await delay(300);
        return loadFromStorage();
    },

    getByRoute: async (routePath: string): Promise<HelpLink | null> => {
        await delay(200);
        const data = loadFromStorage();
        return data.find(link => link.routePath === routePath && link.isActive) || null;
    },

    create: async (data: HelpLinkCreate): Promise<HelpLink> => {
        await delay(300);
        const all = loadFromStorage();
        const newId = Math.max(0, ...all.map(l => l.id)) + 1;
        
        const newLink: HelpLink = {
            id: newId,
            ...data,
            isActive: data.isActive ?? true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        
        all.push(newLink);
        saveToStorage(all);
        return newLink;
    },

    update: async (id: number, data: Partial<HelpLinkCreate>): Promise<HelpLink> => {
        await delay(300);
        const all = loadFromStorage();
        const index = all.findIndex(l => l.id === id);
        
        if (index === -1) {
            throw new Error('Help link not found');
        }
        
        const updated: HelpLink = {
            ...all[index],
            ...data,
            updatedAt: new Date().toISOString()
        };
        
        all[index] = updated;
        saveToStorage(all);
        return updated;
    },

    delete: async (id: number): Promise<void> => {
        await delay(300);
        const all = loadFromStorage();
        const filtered = all.filter(l => l.id !== id);
        saveToStorage(filtered);
    },

    getActiveRoutes: async (): Promise<string[]> => {
        await delay(200);
        const data = loadFromStorage();
        return data.filter(l => l.isActive).map(l => l.routePath);
    }
};