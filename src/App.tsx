import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
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
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/react-patterns" element={<ReactPatternsPage />} />
            <Route path="/react-typescript" element={<ReactTypeScriptPage />} />
            <Route path="/react-advanced" element={<ReactAdvancedPage />} />
            <Route path="/design-developers" element={<DesignDevelopersPage />} />
            <Route path="/clean-code-js" element={<CleanCodePage />} />
            <Route path="/ai-tools-developers" element={<AIToolsPage />} />
            <Route path="/coming-soon" element={<ComingSoonPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
