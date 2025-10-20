import { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { ComingSoonPage } from './pages/ComingSoonPage';
import { ReactPatternsPage } from './features/react-patterns';
import { ReactTypeScriptPage } from './features/react-typescript/ReactTypeScriptPage';
import { ReactAdvancedPage } from './features/react-advanced/ReactAdvancedPage';
import { DesignDevelopersPage } from './features/design-developers/DesignDevelopersPage';
import { CleanCodePage } from './features/clean-code-js/CleanCodePage';
import { AIToolsPage } from './features/ai-tools-developers/AIToolsPage';
import './App.css';
import { HomePage } from './pages/HomePage';

function App() {
  const [currentFeature, setCurrentFeature] = useState('home');

  useEffect(() => {
    const handleNavigateToFeature = (event: CustomEvent) => {
      setCurrentFeature(event.detail.feature);
    };

    window.addEventListener('navigate-to-feature', handleNavigateToFeature as EventListener);
    
    return () => {
      window.removeEventListener('navigate-to-feature', handleNavigateToFeature as EventListener);
    };
  }, []);

  const renderCurrentFeature = () => {
    switch (currentFeature) {
      case 'home':
        return <HomePage />;
      case 'react-patterns':
        return <ReactPatternsPage />;
      case 'react-typescript':
        return <ReactTypeScriptPage />;
      case 'react-advanced':
        return <ReactAdvancedPage />;
      case 'design-developers':
        return <DesignDevelopersPage />;
      case 'clean-code-js':
        return <CleanCodePage />;
      case 'ai-tools-developers':
        return <AIToolsPage />;
      case 'coming-soon':
        return <ComingSoonPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      <Layout 
        currentFeature={currentFeature}
        onFeatureChange={setCurrentFeature}
      >
        {renderCurrentFeature()}
      </Layout>
    </div>
  );
}

export default App;
