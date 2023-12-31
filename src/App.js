import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';
import { useState } from 'react';
import { createContext } from 'react';

export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState('laptop');
  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <p>Count value: {category}</p>
      <Header />
      <Home />
      <Shipment />
    </CategoryContext.Provider>
  );
}

export default App;
