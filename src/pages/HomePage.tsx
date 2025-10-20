import React from 'react';
import {
    GraduationCap,
    Heart,
    Star,
    Users,
    CheckCircle,
    ArrowRight,
    Play
} from 'lucide-react';
import { useHomePage } from '../hooks/useHomePage';
import { CreditItem } from '../components/CreditItem/CreditItem';
import './HomePage.css';

export const HomePage: React.FC = () => {
    // Usar el hook personalizado para obtener datos y lógica
    const { heroFeatures, demonstrations, creditsData } = useHomePage();    return (
        <div className="home-page">
            <div className="hero-section">
                <div className="hero-content">
                    <div className="hero-icon">
                        <GraduationCap size={64} />
                    </div>
                    <h1 className="hero-title">
                        Bienvenido al Showcase de Desarrollo
                    </h1>
                    <p className="hero-subtitle">
                        Demostraciones prácticas de lo aprendido, patrones avanzados y técnicas modernas de desarrollo
                    </p>
                    <div className="hero-features">
                        {heroFeatures.map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <div key={index} className="feature-item">
                                    <div className="feature-icon">
                                        <IconComponent size={20} />
                                    </div>
                                    <span>{feature.text}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="features-overview">
                <h2>Demostraciones Disponibles</h2>
                <div className="features-grid">
                    {demonstrations.map((demo) => {
                        const IconComponent = demo.icon;
                        return (
                            <div key={demo.id} className={`feature-card ${demo.status}`}>
                                <div className={`status-badge ${demo.status}`}>
                                    {demo.status === 'available' && <CheckCircle size={12} />}
                                    <span>{demo.status === 'available' ? 'Disponible' : 'Próximamente'}</span>
                                </div>
                                <div className="feature-header">
                                    <div className="feature-icon">
                                        <IconComponent size={20} />
                                    </div>
                                    <div className="feature-title">
                                        <h3>{demo.title}</h3>
                                    </div>
                                </div>
                                <p>{demo.description}</p>
                                <div className="feature-tech">
                                    {demo.techTags.map((tag, index) => (
                                        <span key={index} className="tech-tag">{tag}</span>
                                    ))}
                                </div>
                                {demo.highlights.length > 0 && (
                                    <div className="feature-highlights">
                                        {demo.highlights.map((highlight, index) => (
                                            <div key={index} className="highlight-item">
                                                <CheckCircle size={14} />
                                                <span>{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <button
                                    className={`feature-action ${demo.action ? '' : 'disabled'}`}
                                    onClick={demo.action || undefined}
                                    disabled={!demo.action}
                                >
                                    {demo.status === 'available' && (
                                        <>
                                            <Play size={16} />
                                            {demo.actionText}
                                            <ArrowRight size={14} />
                                        </>
                                    )}
                                    {demo.status === 'coming-soon' && (
                                        <span>{demo.actionText}</span>
                                    )}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="credits-section">
                <div className="credits-content">
                    <h2>
                        <Heart size={24} />
                        Créditos y Licencia
                    </h2>
                    <div className="credits-info">
                        {creditsData.map((credit) => (
                            <CreditItem key={credit.id} credit={credit} />
                        ))}
                        
                        <div className="credit-item">
                            <div className="credit-header">
                                <Users size={20} />
                                <h3>Comunidad</h3>
                            </div>
                            <p>
                                Gracias a la comunidad de desarrolladores que hace posible proyectos educativos como este.
                            </p>
                            <div className="community-note">
                                <Star size={16} />
                                <span>Si te gustó este proyecto, ¡dale una estrella!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};