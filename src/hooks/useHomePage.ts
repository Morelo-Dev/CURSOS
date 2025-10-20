import { useCallback } from 'react';
import { heroFeatures, createDemonstrations, creditsData } from '../data/homePageData';
import type { HeroFeature, Demonstration, CreditData } from '../data/homePageData';

// Hook personalizado para la lógica del HomePage
export const useHomePage = () => {
    // Función para navegar a patrones
    const handleExplorePatterns = useCallback(() => {
        const event = new CustomEvent('navigate-to-feature', { 
            detail: { feature: 'react-patterns' } 
        });
        window.dispatchEvent(event);
    }, []);

    // Obtener datos estructurados
    const getHeroFeatures = (): HeroFeature[] => heroFeatures;
    
    const getDemonstrations = (): Demonstration[] => 
        createDemonstrations(handleExplorePatterns);
    
    const getCreditsData = (): CreditData[] => creditsData;

    return {
        // Datos
        heroFeatures: getHeroFeatures(),
        demonstrations: getDemonstrations(),
        creditsData: getCreditsData(),
        
        // Funciones
        handleExplorePatterns
    };
};