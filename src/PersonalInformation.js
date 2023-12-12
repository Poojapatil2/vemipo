// PersonalInformation.js
import React from 'react';
import FirstName from './FirstName';
import MiddleName from './MiddleName';
import LastName from './LastName';
import Gender from './Gender';
import DateofBirth from './DateofBirth';

const PersonalInformation = (props) => {
  console.log('Received props:', props);
  return (
    <div>
      <FirstName />
      <MiddleName />
      <LastName />
      <Gender />
      <DateofBirth/>
    </div>
  );
};

export default PersonalInformation;
