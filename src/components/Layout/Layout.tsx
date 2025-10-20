import React from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const currentFeature = location.pathname === '/' ? 'home' : location.pathname.slice(1);

  return (
    <div className="app-layout">
      <Header currentFeature={currentFeature} />
      <main className="app-main">
        {children}
      </main>
    </div>
  );
};