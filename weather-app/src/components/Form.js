import React from 'react';
import { Field, Control, Input } from 'bloomer';

const Form = props => (
  <Field isHorizontal>
    <form onSubmit={props.getWeather}>

      <Control>
        <Input type="text" name="zip" placeholder="zipcode"/>
      </Control>
      
      <Control>
        <button>Get Weather</button>
      </Control>

    </form>
  </Field>
)

export default Form;
