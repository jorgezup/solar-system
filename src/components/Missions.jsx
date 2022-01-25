import React from 'react';

import Title from './Title';
import MissionCard from './MissionCard';

import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="missions">
          {missions.map((mission, index) => {
            const { name, year, country, destination } = mission;
            return (
              <MissionCard
                key={ index }
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Missions;
