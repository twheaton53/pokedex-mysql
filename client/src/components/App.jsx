import React from 'react';
import axios from 'axios';
import PokemonList from './PokemonList.jsx';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      pokemon: []
    }

  }

  componentDidMount() {
    axios.get('/api/pokedex')
      .then((result) => {
        console.log(result);
        this.setState({
          pokemon: result.data
        });
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
          <option>Grass</option>
          <option>Fire</option>
          <option>Water</option>
        </select>
        <div>
          <PokemonList pokemons={this.state.pokemon} />
        </div>
      </div>
    )
  }
}

export default App;