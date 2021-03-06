import React from 'react';
import { Box, Container } from 'bloomer';

const Weather = (props) => (
  <Container>
    {
      props.city && <Box>City: { props.city }</Box>
    }

    {
      props.temperature && <Box>Temperature: { props.temperature }°F</Box>
    }

    {
      props.clouds && <Box>Cloud coverage: { props.clouds }%</Box>
    }

    {
      props.humidity && <Box>Humidity: { props.humidity }%</Box>
    }

    {
      props.description && <Box>Conditions: { props.description }</Box>
    }

    {
      props.icon && <Box>{ props.icon }</Box>
    }

    {
      props.error && <Box>{ props.error }</Box>
    }
  </Container>
)

export default Weather;


// since we're only returning one thing, there's no need for 'return (  {props.city}...etc  )'
