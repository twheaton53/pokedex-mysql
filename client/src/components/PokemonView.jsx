import React from 'react';

const PokemonView = ( { pokemon } ) => {
  return (
    <div>
      <h3>{pokemon.name}</h3>
      <img src={pokemon.img} />
      <p>{pokemon.type}</p>
    </div>
  )
}

export default PokemonView;