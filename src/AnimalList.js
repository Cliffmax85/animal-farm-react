import React from 'react';
import Animal from './Animal/Animal';

export default function AnimalList(props) {
  return ( 
    <div>
      {props.animals.map((animal, i) => 
        <Animal key={animal.name + i} {...animal} />
      )}
    </div>);
}