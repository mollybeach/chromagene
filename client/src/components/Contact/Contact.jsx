import React, { Component } from 'react';
//import Uploads from './Uploads';
//import { NavLink } from "react-router-dom";
import { uuid } from 'uuidv4';
import axios from 'axios';
import { API_URL } from "../../utils/utils";
import './Contact.scss';


class Contact extends Component {
  state=({
    current: false
})
  addNewUpload= (event) =>{
     event.preventDefault();
    if(!event.target.contactName.value || 
      !event.target.contactAddress.value ||
      !event.target.contactCity.value ||
      !event.target.contactCountry.value) {
          alert("Please fill in all fields to udpate item");
          return;
      }
     
     axios.post(`${API_URL}/contact`, {
      id: 20390123901,
      name: event.target.contactName.value,
      address: event.target.contactAddress.value,
      city: event.target.contactCity.value,
      country: event.target.contactCountry.value,
  })
    event.target.reset();
    alert("Item successfully added!");
}

    render() {


        return (
          <section className="contact">
            <h2 className="contact__title">Contact Details</h2>
            <div className="contact__title-label-container">
              <label htmlFor="contactName" className="contact__label">Contact Name</label>
              <input type="text" id="contactName" className="contact__input" name="contactName" placeholder="Contact Name"/>
            </div>
            <div className="contact__title-label-container">
              <label htmlFor="contactPosition" className="contact__label">Position</label>
              <input type="text" id="contactPosition" className="contact__input" name="contactPosition" placeholder="Position"/>
            </div>
            <div className="contact__title-label-container">
              <label htmlFor="contactPhone" className="contact__label">Phone Number</label>
              <input type="phone" id="contactPhone" className="contact__input" name="contactPhone" placeholder="Phone"/>
            </div>
            <div className="contact__title-label-container">
              <label htmlFor="contactEmail" className="contact__label">Email</label>
              <input type="email" id="contactEmail" className="contact__input" name="contactEmail" placeholder="Email"/>
            </div>
            <div className='contact-footer'>
                <div className='contact-footer__btn-container' ></div>
            </div>
          </section>
        )
      }
    }

export default Contact;