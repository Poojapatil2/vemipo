import React from 'react';
import { Registry } from 'react-form-builder2';

const FirstName = React.forwardRef((props, ref) => {
    const { FirstName, defaultValue, disabled } = props;
    return <input ref={ref} name={FirstName} defaultValue={defaultValue} disabled={disabled} className='form-control' />;
  });

  Registry.register('FirstName', FirstName);

export default FirstName;
