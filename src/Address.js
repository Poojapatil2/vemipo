import React from 'react';
import { Registry } from 'react-form-builder2';

const Address = React.forwardRef((props, ref) => {
  const { address, defaultValue, disabled } = props;
  return <textarea ref={ref} name={address} defaultValue={defaultValue} disabled={disabled} className='form-control' />;
});

Registry.register('Address', Address);

export default Address;