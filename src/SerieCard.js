import React from 'react';
import Card from './components/Card.js';
import DetailsCard from './components/DetailsCard.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'aphrodite-react';

export default class SerieCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      details: []
    };
    this.getSerieDetails = this.getSerieDetails.bind(this);
  }

  getSerieDetails(event) {
    const BASE_URL = 'http://api.tvmaze.com';

    fetch(`${BASE_URL}/shows/${this.props.show.id}`)
      .then(res => res.json())
      .then(data => this.setState({ details: data}));
    };

  render() {
    console.log(this.state.details)
    return (
      <Card key={ this.props.show.id }>
        <h2>{ this.props.show.name }</h2>
        <h3>{ this.props.show.genres + ' ' }</h3>
        <div>
          <img src={ this.props.show.image.medium } alt="Poster da Série" />
        </div>
        <Router>
          <div>
            <Link to="/details"><Button onClick={this.getSerieDetails}>Detalhes</Button></Link>
            <Route path="/details" render={ () =>
              <div>
                <div>
                  <img src={ this.props.show.image.medium } alt="Poster da Série" />
                </div>
                <h2>{ this.props.show.name }</h2>
                <h3>{ this.props.show.genres + ' ' }</h3>
                <p>{ this.props.show.summary }</p>
                <h4>{ this.props.show.premiered }</h4>
              </div>
            } />
          </div>
        </Router>
      </Card>
    );
  }
}
