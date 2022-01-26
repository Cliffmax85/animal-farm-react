import React from 'react';
import './Animal.css';

export default function Animal({ animal }) {
  return (
    <div className='animal-card' style=''>
      <img src={ `/images/${animal.type}.png`} />
    </div>
  );
}