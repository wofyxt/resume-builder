import React from 'react';

const Button = ({ children, variant = 'primary', onClick, ...props }) => {
  const baseClasses = 'custom-button';
  const variantClasses = 
    variant === 'primary' ? 'reg-button' : 
    variant === 'secondary' ? 'login-button' : 
    'custom-button';

  return (
    <button 
      className={`${baseClasses} ${variantClasses}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;