import React from 'react';
import { ReactFormGenerator, ElementStore } from 'react-form-builder2';
import FormFields from './FormFields';
import axios from 'axios';




export default class FormPreviewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      previewVisible: false,
      formName: '',
      savedData: null,
      formList: [],  // New state property for storing the list of forms
      formData: null,
    };

    this._onUpdate = this._onUpdate.bind(this);
  }

  componentDidMount() {
    ElementStore.subscribe(state => this._onUpdate(state.data));
  }

  showPreview() {
    this.setState({
      previewVisible: true,
    });
  }

  closePreview() {
    this.setState({
      previewVisible: false,

    });
  }

  handleFormNameChange(event) {
    // Update the form name when user input changes
    this.setState({
      formName: event.target.value,
    });
  }

  async saveForm() {
    console.log(this.state, "form")
    const formData = {
      formName: this.state.formName, // Use the dynamically set form name
      formDescription: "This is consent form",
      version: "1.0.0",
      isActive: true,
      companyId: "3",
      fields: this.state.data.map(field => ({
        fieldName: field.label,
        fieldType: field.element,
        fieldValue: "",
        fieldLimit: null,
        required: field.required,
        rowCordinates: field.row,
        columnCordinates: field.col,
        canHavePageBreakBefore: false,
        canHaveDisplayHorizontal: false,
        canHaveOptionCorrect: false,
        canHaveOptionValue: false,
        canPopulateFromApi: false,
        bold: false,
        italic: false,
        pageBreakBefore: false,
        custom_options: field.custom_options,
      })),
    };

    if (this.state.formName)
    try {
      const response = await fetch('http://13.59.130.104:8080/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form data saved successfully');
        this.setState({data: [], formName: ""})
        // Reset the form builder state after saving the form
        // ElementStore.resetStore();
        // You can add any additional logic after the form is successfully saved

        // Fetch and display the saved data after saving the form
        // this.fetchFormList();
      } else {
        console.error('Failed to save form data');
      }
    } catch (error) {
      console.error('Error saving form data:', error);
    } finally {
      this.closePreview();
    }
  }

  isFieldRequired(field) {
    // Check if the custom property "isRequiredField" is set to true
    return field.isRequiredField === true;
  }

  async fetchFormList() {
    try {
      const response = await axios.get(`http://13.59.130.104:8080/form?formName=${this.state.formName}`);
      if (response.status === 200) {
        const formList = response.data;
        this.setState({ formList });
        console.log(formList)
      } else {
        console.error('Failed to fetch saved form data');
      }
    } catch (error) {
      console.error('Error fetching saved form data:', error);
    }
  }

  
  async fetchFormData(formId) {
    try {
      const response = await axios.get(`http://13.59.130.104:8080/form?formName=${formId}`);
      if (response.status === 200) {
        // const formList = await response.json();
        // this.setState({ formList });
        const formData = response.data.data[0];
        this.setState({formData})
        console.log("formData", formData)
        
      } else {
        console.error('Failed to fetch saved form data');
      }
    } catch (error) {
      console.error('Error fetching saved form data:', error);
    }
  }

  _onUpdate(data) {
    // Check if a header text element is present in the updated data
    const hasHeaderText = data.some(field => field.element === 'Header');

    if (hasHeaderText) {
      // If header text is present, update the form name dynamically
      const updatedFormName = 'Your Dynamic Form Name Logic Here';

      this.setState({
        formName: updatedFormName,
      });
    }

    this.setState({
      data,
    });
  }

  HandleFormClick(data) {
    this.fetchFormData( data)
  }

  render() {
    
    return (
      <div className="clearfix" style={{ margin: '10px', width: '70%' }}>
        <div className='button-preview'>
          <button className="btn btn-primary float-right " style={{ marginRight: '10px' }} onClick={this.showPreview.bind(this)}>Preview Form</button>
          <button className="btn btn-info float-right" style={{ marginRight: '10px' }} onClick={this.fetchFormList.bind(this)}>Show Forms</button>
        </div>


        <div>
          <label>Form Name:</label>
          <input
            type="text"
            value={this.state.formName}
            onChange={this.handleFormNameChange.bind(this)}
            className='form-control'
            style={{ maxWidth: '300px', marginLeft: '20px' }}
          />
        </div>

        {this.state.previewVisible &&
          <div className='modal'>
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <h4> <span>Form Name:</span> </h4> {this.state.formName}
                </div>
                <ReactFormGenerator
                  download_path=""
                  back_action="/"
                  answer_data={{}}
                  form_action="/"
                  form_method="POST"
                  variables={this.props.variables}
                  data={this.state.data}
                />
                

                <div className="modal-footer">
                  <button type="button" className="btn btn-default" onClick={this.closePreview.bind(this)}>Close</button>
                  <button type="button" className="btn btn-primary" onClick={this.saveForm.bind(this)}>Save Form</button>
                </div>
              </div>
            </div>
          </div>
        }

        {this.state.formList.data?.length > 0 && (
          <div>
            {this.state.formData ?(
              <div>
                <span onClick={() => this.setState({formData: null, formList: []})}>X</span>
                <p><b>Form Name</b> : {this.state.formData.formName}</p>
                <FormFields formFields={this.state.formData.fields} />
              </div>
              // <div>
              //   <span onClick={() => this.setState({ formData: null, formList: [] })}>X</span>
              //   <p>
              //     <b>Form Name</b> : {this.state.formData.formName}
              //   </p>
              //   <ReactFormGenerator
              //     download_path=""
              //     back_action="/"
              //     answer_data={{}}
              //     form_action="/"
              //     form_method="POST"
              //     variables={this.props.variables}
              //     data={this.state.formData.fields}
              //   />
              // </div>
              ) :
              (
              <div>
              <h2>Form List</h2>
              <ul>
                {this.state.formList.data.map(form => (
                  <li key={form.formId} onClick={this.HandleFormClick.bind(this, form.formName)}>{form.formName}</li>
                ))}
              </ul>
            </div>)
            }
            
          </div>
        )}


      </div>
    );
  }
}
