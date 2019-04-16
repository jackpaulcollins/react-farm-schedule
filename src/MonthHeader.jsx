import React from 'react';

function MonthHeader (props) {
  const styles = {
    backgroundColor: 'lightgreen',
    padding: ' 10px 20px',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px'
  };

  return(
    <h1 style={styles}>{props.month}</h1>
  );
}

export default MonthHeader;
