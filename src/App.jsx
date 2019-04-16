import React from 'react';
import LocationList from './LocationList';
import ProduceList from './ProduceList';

function App() {
  const styles = {
    display: 'flex',
    width: '100vw'
  };

  return (
    <div style={styles}>
      <style jsx global>
        {`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
      `}
      </style>

      <LocationList/>
      <ProduceList/>
    </div>
  );
}

export default App;
