import React from 'react';
import { Registry } from 'react-form-builder2';

const DateofBirth = React.forwardRef((props, ref) => {
  const { dob, defaultValue, disabled } = props;

  return (
    <input
      ref={ref}
      type="date"  // Set the input type to 'date' for date input
      name={dob}
      defaultValue={defaultValue}
      disabled={disabled}
      className='form-control'
    />
  );
});

Registry.register('DateofBirth', DateofBirth);

export default DateofBirth;
