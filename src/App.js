import React from 'react';
import './App.css';

import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import PlanetCard from './components/PlanetCard';
import Missions from './components/Missions';

import planets from './data/planets';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <div className="planets">
          {planets.map((planet, index) => (
            <PlanetCard
              key={ index }
              planetName={ planet.name }
              planetImage={ planet.image }
            />
          ))}
        </div>
        <Missions />
        <Footer />
      </>
    );
  }
}

export default App;
