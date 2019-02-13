import React from 'react';
import Card from './Card.js';

const DetailsCard = (props) => {
  return (
    <div>
      <Card>
        <div>
          <img src={ props.show.image.medium } alt="Poster da Série" />
        </div>
        <h2>{ props.show.name }</h2>
        <h3>{ props.show.genres + ' ' }</h3>
        <p>{ props.show.summary }</p>
        <h4>{ props.show.premiered }</h4>
      </Card>
    </div>
  );
}

export default DetailsCard;
