import React from 'react';
import './App.css';

import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';

import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Missions />
        <Footer />
      </>
    );
  }
}

export default App;
