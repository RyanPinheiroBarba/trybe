import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PlanetCard extends Component {
  render() {
    const { planetImage, planetName } = this.props;
    return (
      <div data-testid="planet-card" className="planet">
        <img src={ planetImage } alt={ `Planeta ${planetName}` } id={ planetName } />
        <p data-testid="planet-name">{planetName}</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string,
  planetName: PropTypes.string,
}.required;
