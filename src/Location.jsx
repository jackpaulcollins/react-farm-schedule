import React from 'react';
import PropTypes from 'prop-types';
import LocationHeader from './LocationHeader';
import LocationBody from './LocationBody';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  height: '12.5%'
};

function Location(props){
  return(
    <div style={styles}>
      <LocationHeader day={props.day}/>
      <LocationBody
        location={props.location}
        hours={props.hours}
        booth={props.booth}
      />




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
