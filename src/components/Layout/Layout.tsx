import React from 'react';
import { Header } from './Header';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
  currentFeature: string;
  onFeatureChange: (feature: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  currentFeature, 
  onFeatureChange 
}) => {
  return (
    <div className="app-layout">
      <Header 
        currentFeature={currentFeature} 
        onFeatureChange={onFeatureChange} 
      />
      <main className="app-main">
        {children}
      </main>
    </div>
  );
};