import React from 'react';
import { Registry } from 'react-form-builder2';

const LastName = React.forwardRef((props, ref) => {
    const { LastName, defaultValue, disabled } = props;
    return <input ref={ref} name={LastName} defaultValue={defaultValue} disabled={disabled} className='form-control' />;
  });

  Registry.register('LastName', LastName);

export default LastName;