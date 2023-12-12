import React from 'react';
import { Registry } from 'react-form-builder2';

const MaritalStatus = React.forwardRef((props, ref) => {
  const { maritalstatus, defaultValue, disabled } = props;

  return (
    <select ref={ref} name={maritalstatus} defaultValue={defaultValue} disabled={disabled} className='form-control'>
      <option value="married">Married</option>
      <option value="umarried">Unmarried</option>
    </select>
  );
});

Registry.register('MaritalStatus', MaritalStatus);

export default MaritalStatus;
