import React, { useState, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const FormFields = ({ formFields }) => {
    const [formData, setFormData] = useState(null);

    const signatureRef = useRef();

    const HandleChange = (name, value) => {
        let tempData = { ...formData };
        tempData[name] = value;
        setFormData(tempData);
    }

    const handleSubmit = () => {
        console.log("submit", formData)
    }

    return <form>
        {formFields.map((ele, ind) => {
            switch (ele.fieldType) {
                case "TextInput":
                    return <div className='col-xs-12 col-md-6'>
                        <p><b>{ele.fieldName ? ele.fieldName : 'Placeholder Text'}</b></p>
                        <input key={ind} name={ele.label} required={ele.required} className='form-control' placeholder={ele.fieldName} onChange={(e) => HandleChange(ele.fieldName, e.target.value)} />
                        <br />
                    </div>

                case "TextArea":
                    return <div className='col-xs-12 col-md-6'>
                        <p><b>{ele.fieldName ? ele.fieldName : 'Placeholder Text'}</b></p>
                        <input key={ind} name={ele.label} required={ele.required} className='form-control' placeholder={ele.fieldName} onChange={(e) => HandleChange(ele.fieldName, e.target.value)} />
                        <br />
                    </div>

                case "RadioButtons":
                    return <div className='col-xs-12 col-md-6'>
                        <p><b>{ele.fieldName ? ele.fieldName : 'Placeholder Text'}</b></p>
                        <div>
                            <label>
                                <input
                                    key={ind}
                                    type="radio"
                                    name={ele.fieldName}
                                    value="male"
                                    onChange={(e) => HandleChange(ele.fieldName, e.target.value)}
                                />
                                Male
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    key={ind + 1}
                                    type="radio"
                                    name={ele.fieldName}
                                    value="female"
                                    onChange={(e) => HandleChange(ele.fieldName, e.target.value)}
                                />
                                Female
                            </label>
                        </div>
                    </div>

                case "Checkboxes":
                    return <div className='col-xs-12 col-md-6'>
                        <p><b>{ele.fieldName ? ele.fieldName : 'Placeholder Text'}</b></p>
                        <div>
                            <label>
                                <input
                                    key={ind}
                                    type="checkbox"
                                    name="male"
                                    onChange={(e) => HandleChange("male", e.target.checked)}
                                />
                                Male
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    key={ind + 1}
                                    type="checkbox"
                                    name="female"
                                    onChange={(e) => HandleChange("female", e.target.checked)}
                                />
                                Female
                            </label>
                        </div>
                        <br />
                    </div>

                case "Image":
                    return (
                        <div className='col-xs-12 col-md-6'>
                            <p><b>{ele.fieldName}</b></p>
                            <input
                                key={ind}
                                name={ele.fieldName}
                                type="file"
                                accept="image/*"  // Specify that only image files are allowed
                                className='form-control'
                                onChange={(e) => HandleChange(ele.fieldName, e.target.files[0])}
                            />
                        </div>
                    );

                case "NumberInput":
                    return (
                        <div className='col-xs-12 col-md-6'>
                            <p><b>{ele.fieldName}</b></p>
                            <input
                                key={ind}
                                name={ele.fieldName}
                                type="number"
                                className='form-control'
                                placeholder={ele.fieldName}
                                onChange={(e) => HandleChange(ele.fieldName, e.target.value)}
                            />
                        </div>
                    );

                case "FileUpload":
                    return (
                        <div className='col-xs-12 col-md-6'>
                            <p><b>{ele.fieldName}</b></p>
                            <input
                                key={ind}
                                name={ele.fieldName}
                                type="file"
                                className='form-control'
                                onChange={(e) => HandleChange(ele.fieldName, e.target.files[0])}
                            />
                        </div>
                    );
            }
        })}
        {formFields.map((ele, ind) => {
            switch (ele.fieldName) {
                case "First Name":
                    return <div className='col-xs-12 col-md-6'>
                        <p><b>{ele.fieldName}</b></p>
                        <input key={ind} name={ele.fieldName} required={ele.required} className='form-control' placeholder={ele.fieldName} onChange={(e) => HandleChange(ele.fieldName, e.target.value)} />
                        <br />
                    </div>
                case "Middle Name":
                    return <div className='col-xs-12 col-md-6'>
                        <p><b>{ele.fieldName}</b></p>
                        <input key={ind} name={ele.fieldName} required={ele.required} className='form-control' placeholder={ele.fieldName} onChange={(e) => HandleChange(ele.fieldName, e.target.value)} />
                        <br />
                    </div>
                case "Last Name":
                    return <div className='col-xs-12 col-md-6'>
                        <p><b>{ele.fieldName}</b></p>
                        <input key={ind} name={ele.fieldName} required={ele.required} className='form-control' placeholder={ele.fieldName} onChange={(e) => HandleChange(ele.fieldName, e.target.value)} />
                        <br />
                    </div>
                case "E-Mail":
                    return <div className='col-xs-12 col-md-6'>
                        <p><b>{ele.fieldName}</b></p>
                        <input key={ind} name={ele.fieldName} required={ele.required} type='email' className='form-control' placeholder={ele.fieldName} onChange={(e) => HandleChange(ele.fieldName, e.target.value)} />
                        <br />
                    </div>
                case "Date of Birth":
                    return <div className='col-xs-12 col-md-6'>
                        <p><b>{ele.fieldName}</b></p>
                        <input key={ind} name={ele.fieldName} required={ele.required} type='date' className='form-control' placeholder={ele.fieldName} onChange={(e) => HandleChange(ele.fieldName, e.target.value)} />
                        <br />
                    </div>

                case "Gender":
                    return (
                        <div className='col-xs-12 col-md-6'>
                            <p><b>{ele.fieldName}</b></p>
                            <select
                                key={ind}
                                name={ele.fieldName}
                                required={ele.required}
                                className='form-control'
                                onChange={(e) => HandleChange(ele.fieldName, e.target.value)}
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            <br />
                        </div>
                    );

                case "Marital Status":
                    return (
                        <div className='col-xs-12 col-md-6'>
                            <p><b>{ele.fieldName}</b></p>
                            <select
                                key={ind}
                                name={ele.fieldName}
                                required={ele.required}
                                className='form-control'
                                onChange={(e) => HandleChange(ele.fieldName, e.target.value)}
                            >
                                <option value="">Select Marital Status</option>
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                            </select>
                            <br />
                        </div>
                    );

                case "Phone Number":
                    return <div className='col-xs-12 col-md-6'>
                        <p><b>{ele.fieldName}</b></p>
                        <input key={ind} name={ele.fieldName} required={ele.required} type='number' className='form-control' placeholder={ele.fieldName} onChange={(e) => HandleChange(ele.fieldName, e.target.value)} />
                        <br />
                    </div>

                case "Address":
                    return <div className='col-xs-12 col-md-6'>
                        <p><b>{ele.fieldName}</b></p>
                        <input key={ind} name={ele.fieldName} required={ele.required} className='form-control' placeholder={ele.fieldName} onChange={(e) => HandleChange(ele.fieldName, e.target.value)} />
                        <br />
                    </div>

                case "City":
                    return <div className='col-xs-12 col-md-6'>
                        <p><b>{ele.fieldName}</b></p>
                        <input key={ind} name={ele.fieldName} required={ele.required} className='form-control' placeholder={ele.fieldName} onChange={(e) => HandleChange(ele.fieldName, e.target.value)} />
                        <br />
                    </div>

                case "Signature":

                    return (
                        <div className='col-xs-12 col-md-6'>
                            <p><b>{ele.fieldName}</b></p>
                            <SignatureCanvas
                                ref={signatureRef}
                                canvasProps={{ className: 'form-control', style: { height: '80px' } }}
                                onEnd={() => {
                                    // Handle the signature data when the user finishes drawing
                                    const signatureData = signatureRef.current.toDataURL();
                                    HandleChange(ele.fieldName, signatureData);
                                }}
                            />
                            <br />
                        </div>
                    );



                default:
                    return;
            }

        })}
        <button type='button' className='btn btn-primary' style={{ margin: '20px' }} onClick={handleSubmit}>Submit</button>
    </form>

};

export default FormFields;