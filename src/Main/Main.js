import React from 'react';
import './Main.css';
import backgroundIMG from '../background.png';
// import AnimalList from '../AnimalList.js';


export default function Main(props) {
  return (
    <main style={{ backgroundImage: `url(${backgroundIMG})` }}>
      {/* <AnimalList animals={props.animals} /> */}
    </main>
  );
}