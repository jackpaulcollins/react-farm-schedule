import React from 'react';
import Location from './Location';



const marketSchedule = [
  {
    day: 'Sunday',
    location: 'Lents International',
    hours: '9:00am - 2:00pm',
    booth: '4A'
  },
  {
    day: 'Monday',
    location: 'Pioneer Courthouse Square',
    hours: '10:00am - 2:00pm',
    booth: '7C'
  },
  {
    day: 'Tuesday',
    location: 'Hillsboro',
    hours: '5:00pm - 8:30pm',
    booth: '1F'
  },
  {
    day: 'Wednesday',
    location: 'Shemanski Park',
    hours: '10:00am - 2:00pm',
    booth: '3E'
  },
  {
    day: 'Thursday',
    location: 'Northwest Portland',
    hours: '2:00pm - 6:00pm',
    booth: '6D'
  },
  {
    day: 'Saturday',
    location: 'Beaverton',
    hours: '10:00am - 1:30pm',
    booth: '9G'
  }
];


function LocationList(){

  const styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '99vh',
    width: '25vw',
    margin: '0px 20px'
  };
  return(
    <div style={styles}>
      {marketSchedule.map((location, index)=>
        <Location day={location.day}
          location={location.location}
          hours={location.hours}
          booth={location.booth}
          key={index}/>
      )}
    </div>
  );
}

export default LocationList;
