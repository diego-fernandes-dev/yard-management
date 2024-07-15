import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = 'primary', className }) => {
  const baseStyles = "py-2 px-4 rounded font-semibold focus:outline-none";
  const primaryStyles = "bg-blue-600 text-white hover:bg-blue-700";
  const secondaryStyles = "bg-gray-600 text-white hover:bg-gray-700";

  const classNames = `${baseStyles} ${type === 'primary' ? primaryStyles : secondaryStyles} ${className}`;

  return (
    <button
      className={classNames}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
