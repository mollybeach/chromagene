import React from 'react';
import axios from 'axios';
import { API_URL } from "../../utils/utils";
import "./Contact.scss";
const uuid = require('uuid');

class Contact extends React.Component {
      addNewContact= (event) =>{
      event.preventDefault();
      if(!event.target.contactName.value || 
        !event.target.contactAddress.value ||
        !event.target.contactCity.value ||
        !event.target.contactCountry.value) {
          alert("Please fill in all fields to update item");
          return;
          }
        axios.post(`${API_URL}/contact`, {
          contactId: 90284902,
          contactName: event.target.contactName.value,
          contactAddress: event.target.contactAddress.value,
          contactCity: event.target.contactCity.value,
          contactCountry: event.target.contactCountry.value,
      })
        event.target.reset();
        alert("Item successfully added!");
    }
render(){
    return (
      <main className="new-contact content-background">
        <div className="new-contact__full-container">
          <section className="new-contact__header-container">
          <form onSubmit={this.addNewContact}>
            <div className="new-contact__forms-container">
            <div className="contact-form ">
        <h2 className="contact-form__title">Contact Details</h2>
        <div className="contact-form__title-label-container">
          <label htmlFor="contactName" className="contact-form__label">Name</label>
          <input type="text" id="contactName" className="contact-form__input" name="contactName" placeholder="Name"/>
        </div>
        <div className="contact-form__title-label-container">
          <label htmlFor="contactAddress" className="contact-form__label">Address</label>
          <input type="text" id="contactAddress" className="contact-form__input" name="contactAddress" placeholder="Street Address"/>
        </div>
        <div className="contact-form__title-label-container">
          <label htmlFor="contactCity" className="contact-form__label" data-error="City field seems to be invalid">City</label>
          <input type="text" id="contactCity" className="contact-form__input" name="contactCity" placeholder="City"/>
        </div>
        <div className="contact-form__title-label-container">
          <label htmlFor="contactCountry" className="contact-form__label">Country</label>
          <input type="text" id="contactCountry" className="contact-form__input" name="contactCountry" placeholder="Country"/>
        </div>
        <div className="contact-form__title-label-container">
            <div className="btn btn--delta contact__buttoncenter" type="submit"><span className="contact__buttontext">Enter</span></div>
            </div>
            </div>
            </div>
          </form>
          </section>
        </div>
      
      </main>
    )
  }
}
export default Contact;
