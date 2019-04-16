import React from 'react';
import PropTypes from 'prop-types';

function Produce(props) {
  const styles = {
    padding: '5px',
    width: '50%',
    textAlign: 'center'
  }

  return (
    <h3 style={styles}>{props.name}</h3>
  );
}

export default Produce;

Produce.PropTypes = {
  name: PropTypes.string
};
