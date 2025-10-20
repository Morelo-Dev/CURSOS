import { useCallback } from 'react';
import { featuresConfig } from '../config/featuresConfig';
import type { FeatureConfig } from '../config/featuresConfig';

export const useNavigation = () => {
    const navigateToFeature = useCallback((route: string) => {
        const event = new CustomEvent('navigate-to-feature', { 
            detail: { feature: route } 
        });
        window.dispatchEvent(event);
    }, []);

    const getNavigationHandlers = () => {
        const handlers: Record<string, () => void> = {};
        
        featuresConfig.forEach(feature => {
            handlers[feature.id] = () => navigateToFeature(feature.route);
        });
        
        return handlers;
    };

    const getFeatures = (): FeatureConfig[] => featuresConfig;

    return {
        navigateToFeature,
        getNavigationHandlers,
        getFeatures
    };
};