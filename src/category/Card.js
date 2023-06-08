import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, description, date } = this.props;

    return (
      <div className="card">
        <div className="card-header">{title}</div>
        <div className="card-body">
          <p>{description}</p>
        </div>
        <div className="card-footer">{date}</div>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Card;
