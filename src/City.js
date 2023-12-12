import React from 'react';
import { Registry } from 'react-form-builder2';

const City = React.forwardRef((props, ref) => {
    const { City, defaultValue, disabled } = props;
    return <input ref={ref} name={City} defaultValue={defaultValue} disabled={disabled} className='form-control' />;
  });

  Registry.register('City', City);

export default City;