import React, { Component } from 'react';
// import { Route, Link } from 'react-router-dom';
import './App.css';
// import { Button } from 'aphrodite-react';
import SerieCard from './SerieCard.js';

class App extends Component {

  constructor(props) {
      super(props);

      this.state = {
        series: [], name: 'Maria'
      };
    }

  componentDidMount() {
    const BASE_URL = 'http://api.tvmaze.com/';

    fetch(`${BASE_URL}/search/shows?q=girls`)
          .then(res => res.json())
          .then(data => this.setState({ series: data }));
  };

  render() {
    console.log(this.state.series);
    return (
      <div>
        {this.state.series.map( (serie) =>
          <SerieCard {...serie} key={serie.show.id} />
        )}
      </div>
    );
  }
}

export default App;
