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
      <Table/>
    </>
  );
}

export default App;
