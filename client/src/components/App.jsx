import React from 'react';
import axios from 'axios';
import PokemonList from './PokemonList.jsx';
import TypesList from './TypesList.jsx';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      pokemon: [],
      types: []
    }

  }

  componentDidMount() {
    axios.get('/api/pokedex')
      .then((pokemonResult) => {
        this.setState({
          pokemon: pokemonResult.data,
        });
      })
      .then(() => {
        return axios.get('/api/pokedex/types')
      })
      .then((typesResult) => {
        this.setState({
          types: typesResult.data
        }, () => console.log(this.state.types))
      })
      .catch((err) => {
        console.log('Error in componentDidMount ', err);
      });
  }

  render() {
    return (
      <div>
        <h1>Fullstack Pokedex!</h1>
        <button>Show All</button>
        <select id="types">
          <option>Sort by Type</option>
          <TypesList types={this.state.types} />
        </select>
        <div>
          <PokemonList pokemons={this.state.pokemon} />
        </div>
      </div>
    )
  }
}

export default App;