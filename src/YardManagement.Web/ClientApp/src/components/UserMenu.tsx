import React, { useState } from 'react';
import { UserCircleIcon, ArrowLeftOnRectangleIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import { CSSTransition } from 'react-transition-group';
import UserAvatar from './UserAvatar';
import DarkModeSwitch from './DarkModeSwitch';

const UserMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="focus:outline-none flex items-center">
        <UserAvatar name="John Doe" avatarUrl="" />
      </button>
      <CSSTransition in={isMenuOpen} timeout={200} classNames="dropdown" unmountOnExit>
        <ul className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          {/* Sessão de Resumo do Usuário */}
          <li className="border-b border-gray-200 dark:border-gray-700 p-4 flex items-center">
            <UserAvatar name="John Doe" avatarUrl="" />
            <div className="ml-3">
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">john.doe@example.com</p>
            </div>
          </li>

          {/* Sessão de Navegação */}
          <li className="border-b border-gray-200 dark:border-gray-700 py-4">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"><UserCircleIcon className="h-5 w-5 mr-2" /> Profile</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"><Cog6ToothIcon className="h-5 w-5 mr-2" /> Settings</a>
          </li>

          {/* Sessão de Configurações */}
          <li className="p-4">
            <DarkModeSwitch />
          </li>
          <li className="p-4">
            <button className="w-full text-center py-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600">
              <ArrowLeftOnRectangleIcon className="h-5 w-5 mr-2 inline" />
              Log out
            </button>
          </li>
        </ul>
      </CSSTransition>
    </div>
  );
};

export default UserMenu;
