import { useState, useEffect } from 'react';

const useSidebar = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(() => {
    const savedState = localStorage.getItem('isSidebarCollapsed');
    return savedState === 'true' || false;
  });

  useEffect(() => {
    localStorage.setItem('isSidebarCollapsed', isSidebarCollapsed.toString());
  }, [isSidebarCollapsed]);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return { isSidebarCollapsed, toggleSidebar };
};

export default useSidebar;
