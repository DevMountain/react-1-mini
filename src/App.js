import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: [],
      picture: '',
      name: ''
    };
  }

  updateState( key, value ) {
    this.setState({ [key]: value });
  }

  addFriend() {
    const { friends, picture, name } = this.state;
    this.setState({ friends: [ ...friends, { picture, name } ], picture: '', name: '' });
  }

  render() {
    console.log('Value for picture on state:', this.state.picture);
    console.log('Value for name on state:', this.state.name);
    console.log('Value for friends on state:', this.state.friends);
    return (
      <div>
        <span>Picture:</span>
        <input onChange={ ( e ) => this.updateState( 'picture', e.target.value ) } value={ this.state.picture } />

        <span>Name:</span>
        <input onChange={ ( e ) => this.updateState( 'name', e.target.value ) } value={ this.state.name } />

        <button onClick={ () => this.addFriend() }>Add Friend</button>
      </div>
    );
  }
}

export default App;
