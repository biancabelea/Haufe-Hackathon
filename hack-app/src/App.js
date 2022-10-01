import React from 'react';
import Map from './components/Map';
import Table from './components/Table';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  return (
    <>
      <h1>Puncte colectare selectiva Timisoara</h1>
      <Map/>
      <h3>Unde sa duci deseurile cel mai aproape de casa</h3>
      <Table/>
    </>
  );
}

export default App;
