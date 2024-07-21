import React from 'react';
import { MoonIcon } from '@heroicons/react/24/outline';
import useDarkMode from '../hooks/useDarkMode';

const DarkModeSwitch: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <MoonIcon className="h-5 w-5 mr-2" />
        <span>Dark Mode</span>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only" checked={isDarkMode} onChange={toggleDarkMode} />
        <div className={`w-11 h-6 rounded-full transition-colors ${isDarkMode ? 'bg-blue-600' : 'bg-gray-200'}`}>
          <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white border border-gray-300 rounded-full transition-transform ${isDarkMode ? 'transform translate-x-5' : ''}`}></div>
        </div>
      </label>
    </div>
  );
};

export default DarkModeSwitch;
