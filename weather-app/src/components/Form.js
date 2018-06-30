import React from 'react';
import { Field, Label, Control, Input } from 'bloomer';

const Form = props => (
  <form onSubmit={props.getWeather}>
    <Control><Input type="text" name="city" placeholder="City"/></Control>
    <Control><Input type="text" name="country" placeholder="Country"/></Control>
    <Control><button>Get Weather</button></Control>
  </form>
)

export default Form;
