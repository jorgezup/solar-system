import React from 'react';

import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import PlanetCard from './components/PlanetCard';
import Missions from './components/Missions';

import planets from './data/planets';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        {planets.map((planet, index) => (
          <PlanetCard
            key={ index }
            planetName={ planet.name }
            planetImage={ planet.image }
          />
        ))}
        <Missions />
      </>
    );
  }
}

export default App;
