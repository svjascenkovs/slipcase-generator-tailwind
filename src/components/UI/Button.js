import React from 'react';

const Button = (props) => {
  return (
    <button
      className={`pl-2 pr-2 rounded-lg text-lg bg-navy text-yellow overflow-hidden drop-shadow-xl hover:scale-105 ${props.className} `}
      onClick={props.onClick}
      disabled={props.disabled || false}
    >
      {props.children}
    </button>
  );
};

export default Button;
