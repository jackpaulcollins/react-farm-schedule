import React from 'react';
import PropTypes from 'prop-types';


function Location(props){
  return(
    <div>
      <h1>{props.day}</h1>
      <h2>{props.location}</h2>
      <h3>{props.hours}</h3>
      <h4>{props.booth}</h4>
    </div>
  );
}

export default Location;

Location.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};
