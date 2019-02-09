import React from 'react';
import Card from './components/Card.js';
// import PropTypes from "prop-types";

// function SerieDetails(props) {
//   return (
//     <li className={props.class}>
//       {props.show.name}
//     </li>
//   )
// }

// SerieDetails.propTypes = {
//   title: PropTypes.string.isRequired,
//   url: PropTypes.string.isRequired,
//   class: PropTypes.string
// }

class SerieCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {details: []}
    this.getSerieDetails = this.getSerieDetails.bind(this);
  }

  getSerieDetails(event) {
    const BASE_URL = 'http://api.tvmaze.com';

    fetch(`${BASE_URL}/search/shows?q=girls`)
      .then(res => res.json())
      .then(data => {
        this.setState({ details: data});
        // if (data.length === 0) {
        //   this.setState({ details: [{name: 'Nao encontrado'}]});
        // } else {
        //   this.setState({ details: data});
        // }
      });
    }

  render() {
    return (
      <Card key={ this.props.show.id }>
        <h2>{ this.props.show.name }</h2>
        <h3>{ this.props.show.genres + ' ' }</h3>
        <img src={ this.props.show.image.medium } alt='Poster da Série'/>
      </Card>
    );
  }
}
//   SerieCard.propTypes = {
//     name: PropTypes.string.isRequired,
//     genre: PropTypes.string.isRequired,
//     id: PropTypes.number.isRequired
// }

export default SerieCard;
