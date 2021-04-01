import React, { Component } from 'react';
import DeletePopup from '../DeletePopup/DeletePopup';
import deleteImg  from '../../assets/Icons/delete_outline-24px.svg';
//import editImg from '../../assets/Icons/edit-24px.svg';
//import chevronImg from '../../assets/Icons/chevron_right-24px.svg';
import {Link} from 'react-router-dom';
import './My23.scss';

class My23 extends Component {
    constructor(props) {
        super(props);
        this.state = { displayPopup: false };
    }
    togglePopup() {
        this.setState({
        displayPopup: !this.state.displayPopup,
        });
    }
    render() {
        const {single23} = this.props;
        const {name,phone,email} = single23.contact;

 
        //const selectedWareId = single23.id;

        return (
            <div className="my23">
        <div className = 'my23__table-row'>
   
            <div className = 'my23__flex-col  my23__flex-col--box1'>
                <div className = 'my23__table-data my23__table-data--spacing my23__tbl-d1' >
                    <h4 className = 'my23__top-title'>my23</h4>
                    <div className = 'my23__flex'>
                    
                                <Link to={`/my23s/${single23.id}`}>
                            <h3 className = 'my23__top-name'>
                           </h3>
                        </Link>
                        <img className = 'my23__top-img' alt=""/>
                    </div>
                </div>
              
                <div className = 'my23__table-data my23__table-data--mb my23__tbl-d2'>
                        <h4 className = 'my23__top-title ' >ADDRESS</h4> 
                        <p className = 'my23__para'>{single23.address}, {single23.city}, {single23.country} </p>
                </div>
            </div>
            <div className = 'my23__flex-col my23__flex-col--box2' >
                <div className = 'my23__table-data  my23__table-data--spacing  my23__tbl-d3 ' >
                        <h4 className = 'my23__top-title' >CONTACT NAME</h4>
                        <p className = 'my23__para my23__para--width' >{name}</p>
                </div>
                <div className = 'my23__table-data my23__table-data--mb  my23__tbl-d4 ' >
                        <h4 className = 'my23__top-title' >CONTACT INFORMATION</h4>
                        <p className = 'my23__para' >{phone}</p>
                        <p className = 'my23__para' >{email}</p>
                </div>      
            </div>            
            <div className = 'my23__table-data my23__table-data--action my23__flex-col--box3' >
            
                <img className = 'my23__delete' src= {deleteImg} alt="" onClick={this.togglePopup.bind(this)}/>
            
            </div>
        </div>
        {this.state.displayPopup ? (
          <DeletePopup closePopup={this.togglePopup.bind(this)} clickedId={single23.id} clickedName={single23.name} path="/"type="my23" kind="item"/>
          ) : null}
        </div>
    );
    }
}
export default My23;
//{single23.name}
//src={chevronImg} 
//    <Link to = {`/my23s/${selectedWareId}/edit`} ><img className = 'my23__para' src= {editImg} alt=""/></Link>