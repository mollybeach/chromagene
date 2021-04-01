

import React, { Component } from 'react';
//import { NavLink } from "react-router-dom";
import { uuid } from 'uuidv4';
import axios from 'axios';

// STYLE IMPORTS
import "./Upload.scss";



// ASSET IMPORTS
//import backArrowIcon from '../../assets/Icons/arrow_back-24px.svg';
import { API_URL } from "../../utils/utils";

class Upload extends Component {

  addNewUpload = (event) => {
    event.preventDefault();
    // Store submitted values from the Upload Details form section
    const uploadName = event.target.uploadName.value;
    const uploadAddress = event.target.uploadAddress.value;
    const uploadCity = event.target.uploadCity.value;
    const uploadCountry = event.target.uploadCountry.value;

    // Store submitted values from the Contact Details form section
    const contactName = event.target.contactName.value;
    const contactPosition = event.target.contactPosition.value;
    const contactPhone = event.target.contactPhone.value;
    const contactEmail = event.target.contactEmail.value;

    // All fields filled out?
    if (!uploadName || !uploadAddress || !uploadCity || !uploadCountry || !contactName || !contactPosition || !contactPhone || !contactEmail) {
      alert("Please fill in all fields to Submit a new Upload");
      return;
    }
        
    // make an axios POST request to post new upload into uploads file
    axios
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
  }

render(){
    return (
        
      <main className="new-upload">
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
        <div className="new-upload__full-container">
          <section className="new-upload__header-container">
          
          </section>
          <form onSubmit={this.addNewUpload}>
            <section className="new-upload__forms-container">
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
  
//  <h1 className="new-upload__title">Add New File</h1>
//  <div className="new-upload__arrow-title-container">
           //   <NavLink to="/"><img src={backArrowIcon} alt="" className="new-upload__back-arrow" /></NavLink>
            
        //    </div>
export default Upload;
