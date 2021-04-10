import React from 'react';
import PokemonView from './PokemonView.jsx';

const PokemonList = ( { pokemons } ) => {

  return (
    <>
      {pokemons.map((mon, index) => (
        <PokemonView pokemon={mon} key={index} />
      ))}
    </>
  )
}

export default PokemonList;