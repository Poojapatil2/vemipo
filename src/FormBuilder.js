import React, { useState } from 'react';
import { ReactFormBuilder } from 'react-form-builder2';
import FormElementsEdit from './form-elements-edit';
import FormPreviewComponent from './FormPreviewComponent'
import FirstName from './FirstName';
import MiddleName from './MiddleName'
import LastName from './LastName';
import DateofBirth from './DateofBirth';
import Gender from './Gender';
import MaritalStatus from './MaritalStatus';
import Address from './Address';
import City from './City';
import 'react-form-builder2/dist/app.css';
import '@fortawesome/fontawesome-free/css/all.css';


const MyFormBuilder = () => {
  const [formData, setFormData] = useState([])
  const [showFormData, setShowFormData] = useState(false);

  

  const items = [
    // { 
    //   group_name: 'Items',
    //   key: 'Header',
    //   name: 'Header Text',
    //   icon: 'fa fa-header',
    //   static: true,
    //   content: 'Placeholder Text...',
    //   style: { marginBottom: '10px' },
    // },
    {
      group_name: 'Items',
      key: 'Paragraph',
      name: 'Paragraph',
      static: true,
      icon: 'fa fa-paragraph',
      content: 'Placeholder Text...',
      style: { marginBottom: '10px' },
    },
    {
      group_name: 'Items',
      key: 'TextInput',
      static: true,
      style: { marginBottom: '10px' },
    },
    {
      group_name: 'Items',
      key: 'TextArea',
      static: true,
    },
    {
      group_name: 'Items',
      key: 'RadioButtons',
      static: true,
    },
    {
      group_name: 'Items',
      key: 'Checkboxes',
      static: true,
    },
    {
      group_name: 'Items',
      key: 'Image',
      static: true,
    },
    {
      group_name: 'Items',
      key: 'NumberInput',
      static: true,
    },
    {
      group_name: 'Fields',
      key: 'FirstName',
      element: 'CustomElement',
      component: FirstName,
      type: 'custom',
      forwardRef: true,
      static: true,
      field_name: 'my_input_',
      name: 'FirstName',
      icon: 'fa fa-user',
      props: { test: 'test_input' },
      label: 'First Name',
      variables: ['FirstNameVariable'],
    },
    {
      group_name: 'Fields',
      key: 'MiddleName',
      element: 'CustomElement',
      component: MiddleName,
      type: 'custom',
      forwardRef: true,
      static: true,
      field_name: 'my_input_',
      name: 'MiddleName',
      icon: 'fa fa-user',
      props: { test: 'test_input' },
      label: 'Middle Name',
      variables: ['MiddleNameVariable'],
    },
    {
      group_name: 'Fields',
      key: 'LastName',
      element: 'CustomElement',
      component: LastName,
      type: 'custom',
      forwardRef: true,
      static: true,
      field_name: 'my_input_',
      name: 'LastName',
      icon: 'fa fa-user',
      props: { test: 'test_input' },
      label: 'Last Name',
      variables: ['LastNameVariable'],
    },
    {
      group_name: 'Fields',
      key: 'EmailInput',
      static: true,
    },
    {
      group_name: 'Fields',
      key: 'PhoneNumber',
      static: true,
     
    },
    {
      group_name: 'Fields',
      key: 'DateofBirth',
      element: 'CustomElement',
      name: 'Date of Birth',
      type: 'custom',
      forwardRef: true,
      static: true,
      custom: DateofBirth,
      icon: 'fa  fa-cake-candles',
      props: { test: 'test_input' },
      label: 'Date of Birth',
      variables: ['DateofBirthVariable'],
    },
    {
      group_name: 'Fields',
      key: 'Gender',
      element: 'CustomElement',
      name: 'Gender',
      type: 'custom',
      forwardRef: true,
      static: true,
      custom: Gender,
      icon: 'fa  fa-venus-mars',
      props: { test: 'test_input' },
      label: 'Gender',
      variables: ['GenderVariable'],
    },
    {
      group_name: 'Fields',
      key: 'MaritalStatus',
      element: 'CustomElement',
      name: 'Marital Status',
      type: 'custom',
      forwardRef: true,
      static: true,
      custom: MaritalStatus,
      icon: 'fa  fa-heart',
      props: { test: 'test_input' },
      label: 'Marital Status',
      variables: ['MaritalStatusVariable'],
    },
    {
      group_name: 'Fields',
      key: 'Address',
      element: 'CustomElement',
      component: Address,
      type: 'custom',
      forwardRef: true,
      static: true,
      field_name: 'my_textarea_',
      name: 'Address',
      icon: 'fa fa-house-chimney',
      label: 'Address',
    },
    {
      group_name: 'Fields',
      key: 'City',
      element: 'CustomElement',
      component: City,
      type: 'custom',
      forwardRef: true,
      static: true,
      field_name: 'my_textarea_',
      name: 'City',
      icon: 'fa fa-house-chimney',
      label: 'City',
    },
    {
      group_name: 'Fields',
      key: 'Signature',
      static: true,
    },

    {
      group_name: 'Items',
      key: 'FileUpload',
      name: 'File Upload',
      icon: 'fa fa-upload',
      static: true,
      input: true,
      file: true,
    },
    {
      group_name: 'Multi Column Row',
      key: 'TwoColumnRow',
    },
    {
      group_name: 'Multi Column Row',
      key: 'ThreeColumnRow',
    },
    {
      group_name: 'Multi Column Row',
      key: 'FourColumnRow',
      element: 'MultiColumnRow',
    },
    {
      group_name: 'Multi Column Row',
      key: 'FiveColumnRow',
      element: 'MultiColumnRow',
    },
    {
      group_name: 'Multi Column Row',
      key: 'SixColumnRow',
      element: 'MultiColumnRow',
    },
  ];


  return (
    <div>
      <FormPreviewComponent formData={formData} />
      
      <ReactFormBuilder
        style={{
          display: 'flex',
          flexDirection: 'row', // Change to 'row' for a horizontal layout
          alignItems: 'flex-start', // Align items at the top
          justifyContent: 'flex-start', // Justify content from the start
          flexWrap: 'wrap', // Allow items to wrap to the next line if needed
        }}
        url='path/to/GET/initial.json'
        toolbarItems={items}
        data={formData}
        // onSave={onSave}
        onChange={(e) => console.log("onchange",e)}
        onSubmit={(e) => console.log(e)}
        saveUrl='./form.json'
    //     edit
    // data={formData}
    // //toolbarItems={items}
    // customToolbarItems={items}
    // onChange={(e) =>console.log(e, 'e')}
    // onSubmit={(e) =>console.log(e, 'e')}

    // renderEditForm={props => <FormElementsEdit {...props}/>}
         />


      <hr />

    </div>
  );
};

export default MyFormBuilder;
