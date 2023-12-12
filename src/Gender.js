import React from 'react';
import { Registry } from 'react-form-builder2';

const Gender = React.forwardRef((props, ref) => {
  const { gender, defaultValue, disabled } = props;

  return (
    <select ref={ref} name={gender} defaultValue={defaultValue} disabled={disabled} className='form-control'>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  );
});

Registry.register('Gender', Gender);

export default Gender;
