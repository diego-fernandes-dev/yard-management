import React from 'react';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline';
import UserMenu from './UserMenu';

interface NavbarProps {
  toggleSidebar: () => void;
  isSidebarCollapsed: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, isSidebarCollapsed }) => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
      <button onClick={toggleSidebar} className="text-gray-900 dark:text-gray-100 focus:outline-none">
        {isSidebarCollapsed ? <ChevronDoubleRightIcon className="h-6 w-6" /> : <ChevronDoubleLeftIcon className="h-6 w-6" />}
      </button>
      <h1 className="text-xl font-bold">Admin UI</h1>
      <div className="flex items-center space-x-4">
        <UserMenu />
      </div>
    </nav>
  );
};

export default Navbar;
