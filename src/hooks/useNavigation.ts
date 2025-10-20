import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { featuresConfig } from '../config/featuresConfig';
import type { FeatureConfig } from '../config/featuresConfig';

export const useNavigation = () => {
    const navigate = useNavigate();
    
    const navigateToFeature = useCallback((route: string) => {
        navigate(`/${route}`);
    }, [navigate]);

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