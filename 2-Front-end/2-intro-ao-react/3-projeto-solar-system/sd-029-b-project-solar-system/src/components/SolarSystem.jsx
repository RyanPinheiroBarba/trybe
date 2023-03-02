import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

export default class SolarSystem extends Component {
  render() {
    const solarSystem = planets.reduce((system, planet) => {
      system.push(
        <PlanetCard
          key={ planet.name }
          planetName={ planet.name }
          planetImage={ planet.image }
        />,
      );
      return system;
    }, []);
    return (
      <>
        <div data-testid="solar-system" className="planetNames">
          <Title headline="Planetas" />
        </div>
        <div className="planetsContainer">
          {solarSystem}
        </div>
      </>
    );
  }
}
