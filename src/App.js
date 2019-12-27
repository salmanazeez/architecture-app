import React from 'react';
import Home from './pages/home';
import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
      <Home />
    </>
  );
}

export default App;
