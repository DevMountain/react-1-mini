import React, { Component } from 'react';

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
        <input onChange={ ( e ) => this.updatePicture( e.target.value ) } value={ this.state.picture } />

        <span>Name:</span>
        <input onChange={ ( e ) => this.updateName( e.target.value ) } value={ this.state.name } />

        <button>Add Friend</button>
      </div>
    );
  }
}

export default App;