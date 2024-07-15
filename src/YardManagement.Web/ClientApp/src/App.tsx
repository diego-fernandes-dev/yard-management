import React, { useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  useEffect(() => {
    const isDark = localStorage.getItem('dark-mode') === 'true';
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <MainLayout>
      <Dashboard />
    </MainLayout>
  );
};

export default App;
