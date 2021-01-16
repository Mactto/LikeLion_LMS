import React from 'react';
import Navbar from './navbar/navbar';
import LandingPage from './LandingPage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
