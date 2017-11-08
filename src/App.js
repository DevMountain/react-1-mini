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

  updatePicture( value ) {
    this.setState({ picture: value });
  }

  updateName( value ) {
    this.setState({ name: value });
  }

  render() {
    return (
      <div>
        <span>Picture:</span>
        <input />

        <span>Name:</span>
        <input />

        <button>Add Friend</button>
      </div>
    );
  }
}

export default App;
