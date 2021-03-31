import React, { Component } from 'react';
import closeImg from '../../assets/Icons/close-24px.svg'; 
import axios from 'axios';
import './DeletePopup.scss';
let API_URL = "http://localhost:8080";

class DeletePopup extends Component {
/**********************DELETE ITEM*************/
deleteItem = (clickedId) => {
  console.log(this.props.path)
  axios.delete(`${API_URL}${this.props.path}${clickedId}`)
      .then(response => {
        this.props.closePopup();
      })
      .catch(error => {
          console.log(error);
      })
  }
    render(){
        return(
          <section className='delete-popup-background'>
            <div className="delete-popup " >
            <div className="delete-popup__wrap ">
              <img className="delete-popup__close-button"  alt="close" onClick={this.props.closePopup} src={closeImg}/>
            <div className="delete-popup__header"> Delete {this.props.clickedName} {this.props.type} {this.props.kind}? </div> 
              <p className="delete-popup__warning">Please confirm that you'd like to delete {this.props.clickedName} from the {this.props.type} list. You won't be able to undo this action.</p>
            <div className="delete-popup__delete-action-button-partition">
            <button className="delete-popup__cancel-button"  onClick={this.props.closePopup}> Cancel </button>
            <button className="delete-popup__delete-button" onClick={() => this.deleteItem(this.props.clickedId)}>Delete</button>
          </div>
          </div>
          </div>
          </section>
      )
    }
}
export default DeletePopup;
