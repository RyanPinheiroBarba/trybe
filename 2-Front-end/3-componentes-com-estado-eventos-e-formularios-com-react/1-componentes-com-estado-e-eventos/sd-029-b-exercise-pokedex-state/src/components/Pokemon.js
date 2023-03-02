import React from 'react';

import { pokemonType } from '../types';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, averageWeight, image } = pokemon;

    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight:
            <span>
              {`${averageWeight.value} ${averageWeight.measurementUnit}`}
            </span>
          </p>
        </div>
        <img src={ image } alt={ `${name}` } />
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: pokemonType.isRequired,
};

export default Pokemon;
