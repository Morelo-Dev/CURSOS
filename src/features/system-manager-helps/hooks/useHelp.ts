import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { helpService } from '../services/help.service';
import type { HelpLink } from '..';

const helpCache = new Map<string, HelpLink | null>();
const CACHE_DURATION = 5 * 60 * 1000;

export const useHelp = () => {
    const location = useLocation();
    const [helpData, setHelpData] = useState<HelpLink | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchHelp = async () => {
            const cached = helpCache.get(location.pathname);
            
            if (cached !== undefined) {
                setHelpData(cached);
                return;
            }

            setIsLoading(true);
            setError(null);

            try {
                const data = await helpService.getByRoute(location.pathname);
                helpCache.set(location.pathname, data);
                setHelpData(data);
                
                setTimeout(() => {
                    helpCache.delete(location.pathname);
                }, CACHE_DURATION);
            } catch (err) {
                setError('Error al cargar ayuda');
                setHelpData(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchHelp();
    }, [location.pathname]);

    const hasHelpAvailable = helpData !== null && helpData.isActive;

    const openVideo = () => {
        if (helpData?.videoUrl) {
            window.open(helpData.videoUrl, '_blank');
        }
    };

    const downloadDocument = () => {
        if (helpData?.documentUrl) {
            window.open(helpData.documentUrl, '_blank');
        }
    };

    const openManual = () => {
        if (helpData?.manualUrl) {
            window.open(helpData.manualUrl, '_blank');
        }
    };

    const openFAQ = () => {
        if (helpData?.faqUrl) {
            window.open(helpData.faqUrl, '_blank');
        }
    };

    const contactSupport = () => {
        if (helpData?.contactEmail) {
            window.location.href = `mailto:${helpData.contactEmail}`;
        }
    };

    const openWhatsApp = () => {
        if (helpData?.whatsappNumber) {
            const number = helpData.whatsappNumber.replace(/[^\d]/g, '');
            window.open(`https://wa.me/${number}`, '_blank');
        }
    };

    return {
        helpData,
        hasHelpAvailable,
        isLoading,
        error,
        openVideo,
        downloadDocument,
        openManual,
        openFAQ,
        contactSupport,
        openWhatsApp
    };
};