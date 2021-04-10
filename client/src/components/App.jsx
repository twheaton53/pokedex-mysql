import React from 'react';
import axios from 'axios';
import PokemonList from './PokemonList.jsx';
import TypesList from './TypesList.jsx';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      pokemon: [],
      types: [],
      typeValue: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleChange(e) {
    let type = e.target.value;
    this.setState({
      typeValue: type
    }, () => {});

    axios.get(`/api/pokedex/types/${type}`)
      .then((typesResult) => {
        this.setState({
          pokemon: typesResult.data
        });
      })
      .catch((err) => {
        console.log('Error updating types ', err);
      });
  }

  handleClick(e) {
    this.setState({
      typeValue: ''
    });

    axios.get(`/api/pokedex`)
      .then((pokemonResult) => {
        this.setState({
          pokemon: pokemonResult.data
        });
      })
      .catch((err) => {
        console.log('Error ', err);
      });
  }

  render() {
    return (
      <div>
        <h1>Fullstack Pokedex!</h1>
        <button onClick={this.handleClick}>Show All</button>
        <select id="types" value={this.state.typeValue} onChange={this.handleChange}>
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