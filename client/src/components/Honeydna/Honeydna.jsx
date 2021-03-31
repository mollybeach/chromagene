import React, { Component } from 'react';
import DeletePopup from '../DeletePopup/DeletePopup';
import deleteImg  from '../../assets/Icons/delete_outline-24px.svg';
import editImg from '../../assets/Icons/edit-24px.svg';
//import chevronImg from '../../assets/Icons/chevron_right-24px.svg';
import {Link} from 'react-router-dom';
import './Honeydna.scss';

class Honeydna extends Component {
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
        const {singleWar} = this.props;
        const {name,phone,email} = singleWar.contact;

 
        const selectedWareId = singleWar.id;

        return (
            <div className="honeydna">
        <div className = 'honeydna__table-row'>
   
            <div className = 'honeydna__flex-col  honeydna__flex-col--box1'>
                <div className = 'honeydna__table-data honeydna__table-data--spacing honeydna__tbl-d1' >
                    <h4 className = 'honeydna__top-title'>honeydna</h4>
                    <div className = 'honeydna__flex'>
                    
                                <Link to={`/honeydnas/${singleWar.id}`}>
                            <h3 className = 'honeydna__top-name'>
                           </h3>
                        </Link>
                        <img className = 'honeydna__top-img' alt=""/>
                    </div>
                </div>
              
                <div className = 'honeydna__table-data honeydna__table-data--mb honeydna__tbl-d2'>
                        <h4 className = 'honeydna__top-title ' >ADDRESS</h4> 
                        <p className = 'honeydna__para'>{singleWar.address}, {singleWar.city}, {singleWar.country} </p>
                </div>
            </div>
            <div className = 'honeydna__flex-col honeydna__flex-col--box2' >
                <div className = 'honeydna__table-data  honeydna__table-data--spacing  honeydna__tbl-d3 ' >
                        <h4 className = 'honeydna__top-title' >CONTACT NAME</h4>
                        <p className = 'honeydna__para honeydna__para--width' >{name}</p>
                </div>
                <div className = 'honeydna__table-data honeydna__table-data--mb  honeydna__tbl-d4 ' >
                        <h4 className = 'honeydna__top-title' >CONTACT INFORMATION</h4>
                        <p className = 'honeydna__para' >{phone}</p>
                        <p className = 'honeydna__para' >{email}</p>
                </div>      
            </div>            
            <div className = 'honeydna__table-data honeydna__table-data--action honeydna__flex-col--box3' >
            
                <img className = 'honeydna__delete' src= {deleteImg} alt="" onClick={this.togglePopup.bind(this)}/>
            
            </div>
        </div>
        {this.state.displayPopup ? (
          <DeletePopup closePopup={this.togglePopup.bind(this)} clickedId={singleWar.id} clickedName={singleWar.name} path="/"type="honeydna" kind="item"/>
          ) : null}
        </div>
    );
    }
}
export default Honeydna;
//{singleWar.name}
//src={chevronImg} 
//    <Link to = {`/honeydnas/${selectedWareId}/edit`} ><img className = 'honeydna__para' src= {editImg} alt=""/></Link>