import React from 'react';

const Button = ({ className, textContent, typeButton = 'primary', ...props }) => {
  let buttonClasses = 'p-2 transition ease-out duration-700';

  if (typeButton === 'primary') {
    buttonClasses +=
      ' border bg-light-white text-primary hover:bg-dark-blue hover:text-white';
  } else if (typeButton === 'secondary') {
    buttonClasses +=
      ' bg-blue text-white hover:bg-white hover:text-primary';
  }

  return (
    <button
      className={`${buttonClasses} ${className}`}
      {...props}
    >
      {textContent}
    </button>
  );
};

export default Button;
