import React from 'react';
import MonthHeader from './MonthHeader';
import MonthBody from './MonthBody';
import PropTypes from 'prop-types';

function Month(props) {
  const styles = {
    width: '30%',
    marginBottom: '20px'

  };

  return (
    <ul style={styles}>
      <MonthHeader month={props.month}/>

      <MonthBody produce={props.produce}/>
    </ul>
  );
}

export default Month;

Month.propTypes = {
  month: PropTypes.string,
  produce: PropTypes.array,
};
