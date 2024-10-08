import React from 'react';

export default function Card(props) {
  return (
    <div className={`shadow-lg rounded-lg overflow-hidden ${props.className}`}>
      {props.children}
    </div>
  );
}
