import React, { Component } from 'react';
import './Gallery.scss';
import chevronImg from '../../assets/Icons/chevron_right-24px.svg';
import axios from 'axios';
import { API_URL } from "../../utils/utils";

class Gallery extends Component {
    state = {
        galleryList : this.props.galleryList
    }
   componentDidMount(){
    this.setState({galleryList: this.props.galleryList})

   }
   componentDidUpdate(prevProps){
    axios.get(`${API_URL}/gallery`)
    .then((response) => {
    if(this.state.galleryList!==  prevProps.match.params) {
         axios.get(`${API_URL}/Gallery`)
           .then((res) => {
               this.setState({
            galleryList : res.data
                  })
           })
           .catch((error) => {
             console.log(error);
           });
         }
      });
     }

   render() {
       if(this.state.galleryList===null) {
         return <p className = "gallery__loading">Loading...</p>
       }
        return (
            <section className='gallery'> 
                <div className='gallery__side'>
                </div>
                <div className='gallery__table' >
                    <div  className='gallery__table-head'>
                        <div className='gallery__info gallery__info--box1'>
                            <h4 className='gallery__title' >gallery</h4>
                            <img className='gallery__img' src={chevronImg} alt=""/>        
                        </div>
                        <div className='gallery__info gallery__info--box2'>
                            <h4 className='gallery__title'>ADDRESS</h4>
                            <img  className='gallery__img' src={chevronImg} alt=""/>        
                        </div>
                        <div className='gallery__info gallery__info--box3'>
                            <h4 className='gallery__title' > CONTACT NAME</h4>
                            <img className='gallery__img' src={chevronImg} alt=""/>        
                        </div>
                        <div className='gallery__info gallery__info--contact-info gallery__info--box4' >
                            <h4 className='gallery__title' >CONTACT INFORMATION</h4>
                            <img className='gallery__img' src={chevronImg} alt=""/>        
                        </div> 
                        <div className='gallery__info gallery__info--actions gallery__info--box5' >
                            <h4 className='gallery__title gallery__title--action' >ACTIONS</h4>    
                        </div>                 
                    </div>
                    <div className ='gallery__table-body' >             
                    </div>
                </div>
            </section>
        );
    }
}

export default Gallery;
//<Form/>
//   {this.state.galleryList.map(warObj => <Card key={galObj.id} singleWar={galObj} />)}
