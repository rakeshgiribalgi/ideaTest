import React, { Fragment, useState, useEffect } from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css'; 
import Header from './components/Header';
import CardData from './components/CardData';


function App() {
 
  return (
    <Fragment>
      <Header />
      <CardData />
     </Fragment>
  );
}

export default App;
