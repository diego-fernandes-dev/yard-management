import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import useSidebar from '../hooks/useSidebar';

const MainLayout: React.FC = ({ children }) => {
  const { isSidebarCollapsed, toggleSidebar } = useSidebar();

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Sidebar isCollapsed={isSidebarCollapsed} />
      <div className="flex flex-col flex-1">
        <Navbar toggleSidebar={toggleSidebar} isSidebarCollapsed={isSidebarCollapsed} />
        <main className="p-4 flex-1 flex items-center justify-center transition-all duration-200">
          <div className={`w-full max-w-7xl mx-auto px-4 ${isSidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
