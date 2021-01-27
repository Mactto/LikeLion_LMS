import React from 'react';
import Navbar from './navbar/navbar';
import LandingPage from './LandingPage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App" style={{width: "100%", height: "100%"}}>
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
