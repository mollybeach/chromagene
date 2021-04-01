import React, { Component } from 'react';
//import Uploads from './Uploads';
//import { NavLink } from "react-router-dom";
import { uuid } from 'uuidv4';
import axios from 'axios';
import { API_URL } from "../../utils/utils";
import "./Upload.scss";

class Upload extends Component {
  
   state=({
        current: false
    })
    addNewUpload= (event) =>{
       event.preventDefault();
       //const { updateList } = this.props;
       //const updateId = uuid();
        //const warehouseID = warehouseList.find(warehouse => warehouse.name === event.target.itemWarehouse.value);

        if(!event.target.uploadName.value || 
          !event.target.uploadAddress.value ||
          !event.target.uploadCity.value ||
          !event.target.uploadCountry.value) {
              alert("Please fill in all fields to udpate item");
              return;
          }
         
         axios.post(`${API_URL}/upload`, {
          id: 20390123901,
          name: event.target.uploadName.value,
          address: event.target.uploadAddress.value,
          city: event.target.uploadCity.value,
          country: event.target.uploadCountry.value,
      })
        event.target.reset();
        alert("Item successfully added!");
    }
render(){
    return (
        
      <main className="new-upload">

        <div className="new-upload__full-container">
          <section className="new-upload__header-container">
          
          </section>
          <form onSubmit={this.addNewUpload}>
            <section className="new-upload__forms-container">
            <section className="upload-form">
        <h2 className="upload-form__title">Upload Details</h2>
        <div className="upload-form__title-label-container">
          <label htmlFor="uploadName" className="upload-form__label">Name</label>
          <input type="text" id="uploadName" className="upload-form__input" name="uploadName" placeholder="upload Name"/>
        </div>
        <div className="upload-form__title-label-container">
          <label htmlFor="uploadAddress" className="upload-form__label">Address</label>
          <input type="text" id="uploadAddress" className="upload-form__input" name="uploadAddress" placeholder="Street Address"/>
        </div>
        <div className="upload-form__title-label-container">
          <label htmlFor="uploadCity" className="upload-form__label" data-error="City field seems to be invalid">City</label>
          <input type="text" id="uploadCity" className="upload-form__input" name="uploadCity" placeholder="City"/>
        </div>
        <div className="upload-form__title-label-container">
          <label htmlFor="uploadCountry" className="upload-form__label">Country</label>
          <input type="text" id="uploadCountry" className="upload-form__input" name="uploadCountry" placeholder="Country"/>
        </div>
      </section>
            </section>
            <section className="form-footer">
              <div className="form-footer__btn-container">
                <button className="cancel-btn">Cancel</button>
                <button type="submit" className="action-btn">+ Add New File</button>

              </div>
            </section>
          </form>
        </div>

  
      </main>
    )
  }
}
  /*        <div>
        <Button onClick={this.handleClick} />
        {this.state.clicked ? <Uploads /> : null}
      </div>*/
//  <h1 className="new-upload__title">Add New File</h1>
//  <div className="new-upload__arrow-title-container">
           //   <NavLink to="/"><img src={backArrowIcon} alt="" className="new-upload__back-arrow" /></NavLink>
            
        //    </div>
export default Upload;

/*   axios
      .post(`${API_URL}/upload/`, {
        id: uuid(),
        name: uploadName,
        address: uploadAddress,
        city: uploadCity,
        country: uploadCountry,
        contact: {
          contactName: contactName,
          position: contactPosition,
          phone: contactPhone,
          email: contactEmail
        }
      })
    event.target.reset();
  } */
// ASSET IMPORTS
//import backArrowIcon from '../../assets/Icons/arrow_back-24px.svg';
/*
import { API_URL } from "../../utils/utils";
class Button extends React.Component {
  constructor() {
    super();
    
    this.state = {
      clicked: false
    };
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState({
      clicked: true
    });
  }
  
  render() {
    return (
      <button {...this.props}>
        click
      </button>
    );
  }  
}


class Upload extends Component {


  /*
  constructor() {
    super();

    this.state = {
      clicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: true
    });
  }

  addNewUpload = (event) => {
    event.preventDefault();
    // Store submitted values from the Upload Details form section
    const uploadName = event.target.uploadName.value;
    const uploadAddress = event.target.uploadAddress.value;
    const uploadCity = event.target.uploadCity.value;
    const uploadCountry = event.target.uploadCountry.value;

    // Store submitted values from the Contact Details form section
    /*
    const contactName = event.target.contactName.value;
    const contactPosition = event.target.contactPosition.value;
    const contactPhone = event.target.contactPhone.value;
    const contactEmail = event.target.contactEmail.value;
    || !contactName || !contactPosition || !contactPhone || !contactEmail
    

    // All fields filled out?
    if (!uploadName || !uploadAddress || !uploadCity || !uploadCountry ) {
      alert("Please fill in all fields to Submit a new Upload");
      return;
    }
        
    // make an axios POST request to post new upload into uploads file
    axios
      .post(`${API_URL}/upload`, {
        id: uuid(),
        name: uploadName,
        address: uploadAddress,
        city: uploadCity,
        country: uploadCountry,
      })
    event.target.reset();
  }

*/