import React from 'react';
import Produce from './Produce';
import PropTypes from 'prop-types';

function MonthBody (props) {
  const styles = {
    paddingLeft: "20px",
    border: '2px solid lightgreen',
    display: 'flex',
    flexGrow: '1',
    flexWrap: 'wrap'
  }

  return (
    <div style={styles}>
      {
        props.produce.map((produceItem, index) =>
          <Produce
            name={produceItem}
            key={index}
          />
        )
      }
    </div>
  );
}

export default MonthBody;

MonthBody.propTypes = {
  produce: PropTypes.array
};
