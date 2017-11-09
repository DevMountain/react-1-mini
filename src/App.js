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

  updateState( key, value ) {
    this.setState({ [key]: value });
  }

  addFriend() {
    const { friends, picture, name } = this.state;
    this.setState({ friends: [ ...friends, { picture, name } ], picture: '', name: '' });
  }

  render() {
    const friends = this.state.friends.map( ( friend, index ) => (
      <div key={ `friend-${ index }-${ friend.name }` }>
        <img width="100px" src={ friend.picture } />
        <span>{ friend.name }</span>
      </div>
    ));

    return (
      <div>
        <span>Picture:</span>
        <input onChange={ ( e ) => this.updateState( 'picture', e.target.value ) } value={ this.state.picture } />

        <span>Name:</span>
        <input onChange={ ( e ) => this.updateState( 'name', e.target.value ) } value={ this.state.name } />

        <button onClick={ () => this.addFriend() }>Add Friend</button>

        { friends }
      </div>
    );
  }
}

export default App;
