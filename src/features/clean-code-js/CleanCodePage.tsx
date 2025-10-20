import React from 'react';
import './CleanCodePage.css';

export const CleanCodePage: React.FC = () => {
  return (
    <div className="clean-code-page">
      <div className="feature-header">
        <h1 className="feature-title">Clean Code y Buenas Prácticas</h1>
        <p className="feature-description">
          Código limpio, patrones de diseño, principios SOLID aplicados a JavaScript y mejores prácticas para desarrollo profesional.
        </p>
      </div>
      
      <div className="coming-soon-content">
        <h2>🚧 Próximamente</h2>
        <p>Esta funcionalidad está en desarrollo.</p>
      </div>
    </div>
  );
};

export default CleanCodePage;