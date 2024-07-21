import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'info' | 'warning';
  variant?: 'default' | 'outlined' | 'pill';
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  ariaLabel?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  color = 'primary',
  variant = 'default',
  className,
  disabled = false,
  loading = false,
  ariaLabel,
  icon,
}) => {
  const baseStyles = "py-2 px-4 font-semibold focus:outline-none inline-flex items-center justify-center";
  
  const colorStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    success: "bg-green-600 text-white hover:bg-green-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    info: "bg-teal-600 text-white hover:bg-teal-700",
    warning: "bg-yellow-600 text-white hover:bg-yellow-700",
  };

  const variantStyles = {
    default: "rounded",
    outlined: "border-2 border-current bg-transparent",
    pill: "rounded-full",
  };

  const disabledStyles = "bg-gray-400 text-gray-700 cursor-not-allowed";

  const classNames = `${baseStyles} ${colorStyles[color]} ${variantStyles[variant]} ${disabled ? disabledStyles : ''} ${className}`;

  return (
    <button
      className={classNames}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      title={ariaLabel}
    >
      {loading ? <span>Loading...</span> : (
        <>
          {icon && <span className="mr-2">{icon}</span>}
          {text}
        </>
      )}
    </button>
  );
};

export default Button;
