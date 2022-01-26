import React from 'react';
import './Animal.css';

export default function Animal(props) {
  return (
    <div className='animal-card' style=''>
      <img src={ `./images/${props.type}.svg`} />
    </div>
  );
}