import React from 'react';

const styles = {
  backgroundColor: 'skyblue',
  color: 'white',
  borderTopLeftRadius: '5px',
  borderTopRightRadius: '5px'
};

function LocationHeader(props) {
  return (
    <h1 style={styles}>{props.day}</h1>
  );
}

export default LocationHeader;
