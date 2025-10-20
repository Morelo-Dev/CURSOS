import { useMemo } from 'react';
import { heroFeatures, createDemonstrations, creditsData } from '../data/homePageData';
import { useNavigation } from './useNavigation';
import type { HeroFeature, Demonstration, CreditData } from '../data/homePageData';

export const useHomePage = () => {
    // Usar el hook centralizado para navegación
    const { getNavigationHandlers } = useNavigation();
    const navigationHandlers = getNavigationHandlers();

    const getHeroFeatures = (): HeroFeature[] => heroFeatures;
    
    const getDemonstrations = (): Demonstration[] => 
        createDemonstrations(navigationHandlers);
    
    const getCreditsData = (): CreditData[] => creditsData;

    // Memoizar las demostraciones para optimizar el rendimiento
    const demonstrations = useMemo(() => getDemonstrations(), [navigationHandlers]);

    return {
        // Datos
        heroFeatures: getHeroFeatures(),
        demonstrations,
        creditsData: getCreditsData(),
        
        // Funciones de navegación (para compatibilidad)
        handleExplorePatterns: navigationHandlers['react-patterns']
    };
};