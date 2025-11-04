import { useState } from 'react';
import { useHelp } from '../../../hooks/useHelp';
import './HelpButton.css';

export const HelpButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { 
        helpData, 
        hasHelpAvailable, 
        isLoading,
        openVideo,
        downloadDocument,
        openManual,
        openFAQ,
        contactSupport,
        openWhatsApp
    } = useHelp();

    if (!hasHelpAvailable) {
        return null;
    }

    return (
        <div className="help-button-container">
            <button 
                className="btn btn-help"
                onClick={() => setIsOpen(!isOpen)}
                title="Ayuda"
                disabled={isLoading}
            >
                <i className={`fa ${isLoading ? 'fa-spinner fa-spin' : 'fa-question-circle'}`}></i>
                Ayuda
            </button>

            {isOpen && (
                <div className="help-dropdown">
                    <div className="help-dropdown-header">
                        <h4>{helpData?.title || 'Recursos de Ayuda'}</h4>
                        <button onClick={() => setIsOpen(false)}>
                            <i className="fa fa-times"></i>
                        </button>
                    </div>
                    
                    <div className="help-dropdown-body">
                        {helpData?.videoUrl && (
                            <button className="help-link" onClick={openVideo}>
                                <i className="fa fa-youtube-play"></i>
                                <span>Video Tutorial</span>
                            </button>
                        )}

                        {helpData?.documentUrl && (
                            <button className="help-link" onClick={downloadDocument}>
                                <i className="fa fa-file-pdf-o"></i>
                                <span>Descargar Manual PDF</span>
                            </button>
                        )}

                        {helpData?.manualUrl && (
                            <button className="help-link" onClick={openManual}>
                                <i className="fa fa-book"></i>
                                <span>Manual Online</span>
                            </button>
                        )}

                        {helpData?.faqUrl && (
                            <button className="help-link" onClick={openFAQ}>
                                <i className="fa fa-question"></i>
                                <span>Preguntas Frecuentes</span>
                            </button>
                        )}

                        {helpData?.contactEmail && (
                            <button className="help-link" onClick={contactSupport}>
                                <i className="fa fa-envelope"></i>
                                <span>Contactar Soporte</span>
                            </button>
                        )}

                        {helpData?.whatsappNumber && (
                            <button className="help-link" onClick={openWhatsApp}>
                                <i className="fa fa-whatsapp"></i>
                                <span>WhatsApp</span>
                            </button>
                        )}
                    </div>
                </div>
            )}

            {isOpen && (
                <div 
                    className="help-dropdown-overlay" 
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
};