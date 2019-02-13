import React from 'react';
import '../Card.css';
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="my-card">
      { props.children }
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired
};

export default Card;
