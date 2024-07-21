import React, { useState } from 'react';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid'; // Importando ícones filled
import { CSSTransition } from 'react-transition-group';
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
    <aside className={`bg-[#0b0c10] h-full overflow-y-auto transition-all duration-200 ${isCollapsed ? 'w-16' : 'w-72'} border-r border-gray-700`}>
      <div className="flex items-left justify-left p-5">
        {!isCollapsed && <span className="text-xl font-bold text-white">Yard Management</span>}
      </div>
      <nav className="p-2 mt-2">
        {menuItems.map((section) => (
          <div key={section.title} className="mb-4">
            <p className={`text-sm font-semibold text-gray-500 uppercase mb-2 pl-5 pr-3 ${isCollapsed ? 'truncate' : ''}`} title={section.title}>
              {section.title}
            </p>
            <ul className="space-y-2">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isOpen = openItems.includes(item.title);
                return (
                  <li key={item.title}>
                    <button
                      className="w-full flex items-center justify-between p-2 pl-5 pr-3 rounded text-sm font-semibold text-[#9a9cae] hover:bg-[#0d0e12] hover:text-[#006ae6] focus:outline-none"
                      onClick={() => toggleItem(item.title)}
                      aria-expanded={isOpen}
                      aria-controls={`submenu-${item.title}`}
                    >
                      <span className="flex items-center">
                        <Icon className="h-5 w-5 text-[#464852]" />
                        <span className={`ml-2 ${isCollapsed ? 'hidden' : 'block'}`}>{item.title}</span>
                      </span>
                      {!isCollapsed && item.subItems.length > 0 && (
                        isOpen ? <ChevronDownIcon className="h-4 w-4 text-[#9a9cae]" /> : <ChevronRightIcon className="h-4 w-4 text-[#6b7280]" />
                      )}
                    </button>
                    {item.subItems.length > 0 && (
                      <CSSTransition in={isOpen} timeout={200} classNames="submenu" unmountOnExit>
                        <ul id={`submenu-${item.title}`} className={`pl-8 mt-2 ${isCollapsed ? 'hidden' : ''}`}>
                          {item.subItems.map((subItem) => {
                            const SubIcon = subItem.icon;
                            return (
                              <li key={subItem.title}>
                                <a
                                  href="#"
                                  className="block p-2 pl-5 pr-3 rounded text-sm font-medium text-[#9a9cae] hover:bg-[#0d0e12] hover:text-[#006ae6] flex items-center focus:outline-none"
                                >
                                  <SubIcon className="h-4 w-4 mr-2 text-[#6b7280] hover:text-[#006ae6]" />
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
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
