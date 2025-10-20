import React from 'react';
import { Github } from 'lucide-react';
import type { CreditData } from '../../data/homePageData';

interface CreditItemProps {
    credit: CreditData;
}

export const CreditItem: React.FC<CreditItemProps> = ({ credit }) => {
    const IconComponent = credit.icon;

    const renderContent = () => {
        switch (credit.type) {
            case 'simple':
                return <p>{credit.content}</p>;

            case 'withLink':
                return (
                    <>
                        <p>{credit.content}</p>
                        <a
                            href={credit.linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-link"
                        >
                            <Github size={16} />
                            {credit.linkText}
                        </a>
                    </>
                );

            case 'withNote':
                return (
                    <>
                        <p>{credit.content}</p>
                        <div className="usage-note">
                            <strong>Contexto:</strong>
                            <code>"{credit.note}"</code>
                        </div>
                    </>
                );

            case 'techStack':
                return (
                    <div className="tech-stack">
                        {credit.technologies?.map((tech, index) => (
                            <a
                                key={index}
                                href={tech.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`tech-badge ${tech.className}`}
                                title={tech.description}
                            >
                                <span className="tech-name">{tech.name}</span>
                                <span className="tech-arrow">→</span>
                            </a>
                        ))}
                    </div>
                );

            default:
                return <p>{credit.content}</p>;
        }
    };

    return (
        <div className="credit-item">
            <div className="credit-header">
                <IconComponent size={20} />
                <h3>{credit.title}</h3>
            </div>
            {renderContent()}
        </div>
    );
};