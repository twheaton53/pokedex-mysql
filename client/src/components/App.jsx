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
      typeValue: '',
      newName: '',
      newType: '',
      newImg: ''
    }

    this.handleTypeSearch = this.handleTypeSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        });
      })
      .catch((err) => {
        console.log('Error in componentDidMount ', err);
      });
  }

  handleTypeSearch(e) {
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

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let type = this.state.newType;
    axios.get(`/api/pokedex/type/${type}`)
      .then((response) => {
        let newPokeObj = {
          name: this.state.newName,
          type: response.data[0].id,
          img: this.state.newImg
        };
        debugger;
        console.log(newPokeObj);
        return axios.post(`/api/pokedex`, newPokeObj);
      })
      .then((result) => {
        return axios.get(`/api/pokedex`)
      })
      .then((getResult) => {
        this.setState({
          pokemon: getResult.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Fullstack Pokedex!</h1>
        <button onClick={this.handleClick}>Show All</button>
        <select id="types" value={this.state.typeValue} onChange={this.handleTypeSearch}>
          <option>Sort by Type</option>
          <TypesList types={this.state.types} />
        </select>
        <form onSubmit={this.handleSubmit}>
          <label>
            Insert a new Pokemon!
          </label>
            <label>Name</label>
              <input type="text" name="newName" value={this.state.newName} onChange={this.handleChange} />
            <label>Type</label>
              <input type="text" name="newType" value={this.state.newType} onChange={this.handleChange} />
            <label>Image Url</label>
              <input type="text" name="newImg" value={this.state.newImg} onChange={this.handleChange} />
              <input type="submit" value="Submit" />
        </form>
        <div>
          <PokemonList pokemons={this.state.pokemon} />
        </div>
      </div>
    )
  }
}

export default App;