import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

export default class Missions extends Component {
  render() {
    const missionList = missions.reduce((missionsCard, mission) => {
      missionsCard.push(
        <MissionCard
          key={ mission.name }
          name={ mission.name }
          year={ mission.year }
          country={ mission.country }
          destination={ mission.destination }
        />,
      );
      return missionsCard;
    }, []);
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="missionsContainer">
          { missionList }
        </div>
      </div>
    );
  }
}
