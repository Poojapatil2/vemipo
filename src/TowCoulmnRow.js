import React from 'react';
import { Registry } from 'react-form-builder2';

const TowCoulmnRow = React.forwardRef((props, ref) => {
    const { LastName, defaultValue, disabled } = props;

    return (<div>
       
       <input ref={ref} name={"LastName"} defaultValue={defaultValue} disabled={disabled} />
       <input name={"firstname"} defaultValue={defaultValue} disabled={disabled} />

    </div>);
});

Registry.register('TowCoulmnRow', TowCoulmnRow);

export default TowCoulmnRow;