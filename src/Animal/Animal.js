import React from 'react';
import './Animal.css';

export default function Animal(props) {
  return (
    <div className='animal-card' style={{ top: `${props.top}`, left: `${props.left}` }}>
      <img src={ `./images/${props.type}.svg`} />
      <p>
        <span>{props.name} says {props.says}</span>
      </p>
    </div>
  );
}