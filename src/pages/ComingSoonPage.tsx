import React from 'react';
import './ComingSoonPage.css';

export const ComingSoonPage: React.FC = () => {
  return (
    <div className="coming-soon-page">
      <div className="coming-soon-content">
        <div className="coming-soon-icon">🚀</div>
        <h1>¡Próximamente!</h1>
        <p>Esta feature está en desarrollo y estará disponible pronto.</p>
        
        <div className="progress-info">
          <h3>🔨 En desarrollo:</h3>
          <ul>
            <li>✅ Estructura base definida</li>
            <li>🔄 Implementación en progreso</li>
            <li>⏳ Testing y documentación pendientes</li>
            <li>🎯 Lanzamiento estimado: Próximas semanas</li>
          </ul>
        </div>
        
        <div className="suggestions">
          <h3>💡 Mientras tanto:</h3>
          <p>Te recomendamos explorar los <strong>Patrones de React</strong> que ya están disponibles con una implementación completa y ejemplos interactivos.</p>
        </div>
      </div>
    </div>
  );
};