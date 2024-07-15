import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const MainLayout = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Sidebar isCollapsed={isSidebarCollapsed} />
      <div className="flex flex-col flex-1">
        <Navbar toggleSidebar={toggleSidebar} isSidebarCollapsed={isSidebarCollapsed} />
        <main className={`p-4 flex-1 overflow-y-auto transition-all duration-200 ${isSidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
