import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  justifyContent: 'space-around',
  border: '2px solid skyblue',
  height: '100%',
  
};

function LocationBody(props) {
  return (
    <div style={styles}>
      <h2>{props.location}</h2>
      <h3>{props.hours}</h3>
      <h3>{props.booth}</h3>
    </div>
  );
}

export default LocationBody;

LocationBody.PropTypes = {
  location : PropTypes.string,
  hours : PropTypes.string,
  booth : PropTypes.string
};
