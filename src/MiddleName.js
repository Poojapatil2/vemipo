import React from 'react';
import { Registry } from 'react-form-builder2';

const MiddleName = React.forwardRef((props, ref) => {
    const { MiddleName, defaultValue, disabled } = props;
    return <input ref={ref} name={MiddleName} defaultValue={defaultValue} disabled={disabled} className='form-control' />;
  });

  Registry.register('MiddleName', MiddleName);

export default MiddleName;