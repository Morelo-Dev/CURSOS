import { useState } from 'react';
import { Layout } from './components/Layout';
import { ComingSoonPage } from './pages/ComingSoonPage';
import { ReactPatternsPage } from './features/react-patterns';
import './App.css';
import { HomePage } from './pages/HomePage';

function App() {
  const [currentFeature, setCurrentFeature] = useState('home');

  const renderCurrentFeature = () => {
    switch (currentFeature) {
      case 'home':
        return <HomePage />;
      case 'react-patterns':
        return <ReactPatternsPage />;
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
