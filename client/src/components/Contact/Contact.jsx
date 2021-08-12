import React from 'react';                   
import axios from 'axios';                                               
import "./Contact.scss";                     
require('dotenv').config();                                                
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
          axios.post(process.env.REACT_APP_API_URL + "contactApi", {
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
      <main class="main">
      <form  class=""method='POST' action="post"  onSubmit={this.addNewContact}>
          <h1 class='form-header'>CONTACT US</h1>
          <div class="form-input " >
                  <label for="user">Subject:</label>
                  <input name='username' type="text" id="user" class="form-input" autocomplete="off"/>
          </div>
          <div class="input-block">
                  <label for="password">Message:</label>
                  <input name='password' type="text" id="password" class="form-input"/>
          </div>
  <button type="submit" class="btn btn--delta">Submit</button>
  </form>
</main>
    )
  }
}
export default Contact;
