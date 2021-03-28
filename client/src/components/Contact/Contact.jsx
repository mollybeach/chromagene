import React, { Component } from 'react';
import './Contact.scss';


class Contact extends Component {

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