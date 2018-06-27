import React from 'react';

const Weather = (props) => (
  <div>
    { props.city && props.country && <p>Location: { props.city }, { props.country }</p>               }
    { props.temperature && <p>Temperature: { props.temperature }</p>                                  }
    { props.humidity && <p>Humidity: { props.humidity }</p>                                           }
    { props.description && <p>Conditions: { props.description }</p>                                   }
    { props.error && <p>{ props.error }</p>                                                           }
  </div>
)

export default Weather;


// since we're only returning one thing, there's no need for 'return (  {props.city}...etc  )'
