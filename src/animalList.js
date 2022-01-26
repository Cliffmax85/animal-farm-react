import React from 'react';
import Animal from './Animal/Animal';

export default function AnimalList(props) {
  return <div>
    {props.animals.map((animal, i) => 
      <Animal key={animal.name + i} name={animal.name} type={animal.type} says={animal.say} top={animal.top} left={animal.left} />
    )}
  </div>;
}