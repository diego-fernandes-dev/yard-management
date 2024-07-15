import React, { useState } from 'react';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { CSSTransition } from 'react-transition-group';
import BrandImage from './BrandImage';
import { menuItems } from '../data/menuItems';

interface SidebarProps {
  isCollapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (title: string) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(title)
        ? prevOpenItems.filter((item) => item !== title)
        : [...prevOpenItems, title]
    );
  };

  return (
    <aside className={`bg-gray-200 dark:bg-gray-800 h-full overflow-y-auto transition-all duration-200 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <BrandImage />
      <ul className="p-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isOpen = openItems.includes(item.title);
          return (
            <li key={item.title} className="mb-2">
              <button
                className="w-full flex items-center justify-between p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700"
                onClick={() => toggleItem(item.title)}
              >
                <span className="flex items-center">
                  <Icon className="h-6 w-6" />
                  <span className={`ml-2 ${isCollapsed ? 'hidden' : 'block'}`}>{item.title}</span>
                </span>
                {!isCollapsed && item.subItems.length > 0 && (
                  isOpen ? <ChevronDownIcon className="h-5 w-5" /> : <ChevronRightIcon className="h-5 w-5" />
                )}
              </button>
              {item.subItems.length > 0 && (
                <CSSTransition in={isOpen} timeout={200} classNames="submenu" unmountOnExit>
                  <ul className={`pl-6 mt-2 ${isCollapsed ? 'hidden' : ''}`}>
                    {item.subItems.map((subItem) => {
                      const SubIcon = subItem.icon;
                      return (
                        <li key={subItem.title} className="mb-2">
                          <a
                            href="#"
                            className="block p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 flex items-center"
                          >
                            <SubIcon className="h-5 w-5 mr-2" />
                            {subItem.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </CSSTransition>
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
