import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import axios from 'axios';
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import Contact from "./components/Contact/Contact";
import My23 from './components/My23/My23';
//import SnpCodeLoad from './componentds/Gallery/snpCoddfgdfefdfdfdfdfdkoLoad';
import UploadFile from "./components/UploadFile/UploadFile";
//import Footer from './components/Footer/Footekkr';
import './App.scss'
//import company from './assets/Icons/company.svg';
//import ring from './assets/Icons/DNA-Circle.svg';
require('dotenv').config();
    

console.log(process.env.REACT_APP_API_URL);
console.log(process.env.REACT_APP_HOST);
class App extends Component {    
  state = {                      
    homeList : null,             
    my23List: null,              
    galleryList : null,          
    updateList: null,            
    contactList : null           
}                                
componentDidMount(){             
  axios.get(process.env.REACT_APP_API_URL + "/home")
    .then(res=>{                 
    this.setState({              
      homeList:res.data          
    })                           
    axios.get(process.env.REACT_APP_API_URL + "/my23")
    .then(res=>{                 
      this.setState({            
        my23List:res.data        
      })                         
      axios.get(process.env.REACT_APP_API_URL + "/gallery")
    .then(res=>{
        this.setState({
          galleryList:res.data
        })            
  })                  
  axios.get(process.env.REACT_APP_API_URL + "/contact")
    .then(res=>{
    this.setState({   
      contactList:res.data
    })                
})                    
axios.get(process.env.REACT_APP_API_URL + "/uploadfile")
.then(res=>{
  this.setState({     
    uploadFileList:res.data
  })                  
})                    
    })                
    })                
}                     
                      
  render() {   
    const { homeList, my23List, galleryList, contactList, uploadFileList} = this.state;
    /*       

    if(homeList ===null ) {  
      return (
      <div> 
     <img className ="app__rainbows"src={company} alt=''></img>
       <div className = "app__load"></div>
       <div className = "app__text"> Thank you for waiting patiently. There's alot to load here! :) </div>
       <img className="app__ring" src={ring} alt=''></img>
       </div> )
       } */
    return (
      <div className = 'app'>
        <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={[`/`, `/home`]} render = {(props)=> <Home   homeList = {homeList}   {...props}  />} />
          <Route exact path={[`/`, `/my23`]} render = {(props)=> <My23  my23List = {my23List} {...props} />} />
          <Route exact path={[`/gallery`]} render = {(props)=> <Gallery galleryList = {galleryList}  {...props} />} />
          <Route exact path = '/uploadfile' render = {(props)=> <UploadFile uploadFileList = {uploadFileList}  {...props} />}  />
          <Route exact path = '/contact'    render = {(props)=> <Contact contactList = {contactList}  {...props}  />} />
     
          </Switch> 
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

//  <Footer/>

//     <Route exact path = '/snpcodeload'    render = {(props)=> <SnpCodeLoad  galleryList = {galleryList}  {...props} />} />

