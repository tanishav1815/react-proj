import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './Components/MainPage';
import Records from './Records.json';
import bolly from'./bolly.json';
import fitness from'./fitness.json';


import { BrowserRouter } from "react-router-dom";

function App() {
  return (
   <>
    <BrowserRouter>
      <MainPage/>
    </BrowserRouter>
      
   </>
  );
}

export default App;
