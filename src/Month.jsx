import React from 'react';
import Produce from './Produce';
import PropTypes from 'prop-types';

function Month(props) {
  return (
    <ul>
      <h1>{props.month}</h1>
      {props.produce.map((produceItem, index) =>
        <Produce name={produceItem}
          key={index}/>
      )}
    </ul>
  );
}

export default Month;

Month.propTypes = {
  month: PropTypes.string,
  produce: PropTypes.array,
};
