import React from 'react';
import { Button, FormGroup, Label } from 'reactstrap';
import { Field, Input, Control } from 'bloomer';

const Form = props => (
  <Field isHorizontal>
    <form onSubmit={props.getWeather}>
<Form>
      <FormGroup>
        <Label for="zip">Enter zipcode</Label>
        <Input type="zip" name="zip" id="zip" placeholder="" />
      </FormGroup>
</Form>
      <Control>
        <Button color='warning' size='sm'>Get Weather</Button>
      </Control>

    </form>
  </Field>
)

export default Form;
