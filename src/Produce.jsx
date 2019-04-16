import React from 'react';
import PropTypes from 'prop-types';

function Produce(props) {
  return (
    <h3>{props.name}</h3>
  );
}

export default Produce;

Produce.propTypes = {
  name: PropTypes.string
};
