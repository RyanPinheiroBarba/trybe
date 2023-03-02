import React from 'react';
import { arrayOf } from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from '../types';

class Pokedex extends React.Component {
  render() {
    const { pokemonList } = this.props;
    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          { pokemonList
            .map((pokemon) => <Pokemon key={ pokemon.id } pokemon={ pokemon } />) }
        </div>
      </>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
};

Pokedex.propTypes = {
  pokemonList: arrayOf(pokemonType),
};

export default Pokedex;
