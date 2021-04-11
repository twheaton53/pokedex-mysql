import React from 'react';

class PokemonView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.pokemon.name,
      img: props.pokemon.img,
      type: props.pokemon.type,
      newName: '',
      showNameForm: false,
      delete: false
    }

    this.changeName = this.changeName.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  changeName() {
    this.setState({
      showNameForm: true
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    }, () => {console.log(this.state.newName)});
  }

  handleDelete() {
    this.setState({
      delete: true
    });
  }

  handleNameChange(e) {
    e.preventDefault();
    let update = this.state.newName;
    console.log(update);
    this.setState({
      name: update,
      newName: '',
      showNameForm: false
    }, () => {});
  }

  render () {
    const updateNameForm = (
      <div>
        <form onSubmit={this.handleNameChange} value={this.state.newName}>
            <label>
              New Name
              <input type="text" name="newName" value={this.state.newName} onChange={this.handleChange} />
            </label>
              <input type="submit" value="Submit" />
        </form>
        <img src={this.state.img} />
        <p>{this.state.type}</p>
      </div>
    );
    const mainPage = (
      <div>
        <h3 onClick={this.changeName}>{this.state.name}</h3>
        <img src={this.state.img} />
        <p>{this.state.type}</p>
        <form onSubmit={this.handleDelete}>
          <label>
            Delete Pokemon
          </label>
          <input type="submit" value="Delete" />
        </form>
      </div>
    );

    const deleted = (
      <div></div>
    );
    // return this.state.showNameForm ? updateNameForm : mainPage;
    if (this.state.delete) {
      return deleted;
    }
    if (this.state.showNameForm) {
      return updatedNameForm
    } else {
      return mainPage
    }
  }
}

export default PokemonView;