import React, { Component } from 'react';
import './App.css';
import SerieCard from './SerieCard.js';
import { Container } from 'aphrodite-react';

export default class App extends Component {

  constructor(props) {
      super(props);

      this.state = {
        series: []
      };
    }

  componentDidMount() {
    const BASE_URL = 'http://api.tvmaze.com/';

    fetch(`${BASE_URL}/search/shows?q=girls`)
      .then(res => res.json())
      .then(data => this.setState({ series: data }));
  };

  render() {
    return (
      <Container fluid>
        <header>
          <img src="/img/logo.png" alt="Logo" style={{width: 100, height: 100}}/>
        </header>
        <div>
          {this.state.series.map( (serie) =>
            <SerieCard {...serie} key={serie.show.id} />
          )}
        </div>
      </Container>
    );
  }
}
