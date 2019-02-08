import React, { Component } from 'react';
import './App.css';
import { Button } from 'aphrodite-react';

class App extends Component {
  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>Aphrodite Button</Button>
      </div>
    );
  }
}

export default App;
