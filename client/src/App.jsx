import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import axios from 'axios';
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import Contact from "./components/Contact/Contact";
import My23 from './components/My23/My23';

import Upload from "./components/Upload/Upload";
//import Footer from './components/Footer/Footekkr';
//import SnpCodeLoad from './componentds/Gallery/snpCodeLoad';
import './App.scss'
//import company from './assets/Icons/company.svg';
//import ring from './assets/Icons/DNA-Circle.svg';
require('dotenv').config();
    

console.log(process.env.REACT_APP_API_URL);
console.log(process.env.REACT_APP_HOST);
class App extends Component {    
  state = {                      
    homeData : null,             
    my23Data: null,              
    galleryData : null,          
    uploadData: null,            
    contactData : null           
}                                
componentDidMount(){             
  axios.get(process.env.REACT_APP_API_URL + "/homeApi")
    .then(res=>{                 
    this.setState({              
      homeData:res.data          
    })                           
    axios.get(process.env.REACT_APP_API_URL + "/my23Api")
    .then(res=>{                 
      this.setState({            
        my23Data:res.data        
      })                         
      axios.get(process.env.REACT_APP_API_URL + "/galleryApi")
    .then(res=>{
        this.setState({
          galleryData:res.data
        })            
  })                  
  axios.get(process.env.REACT_APP_API_URL + "/contactApi")
    .then(res=>{
    this.setState({   
      contactData:res.data
    })                
})                    
axios.get(process.env.REACT_APP_API_URL + "/uploadApi")
.then(res=>{
  this.setState({     
    uploadData:res.data
  })                  
})                    
    })                
    })                
}                     
                      
  render() {   
    
    const { homeData, my23Data, galleryData, contactData, uploadData} = this.state;
    /*       

    if(homeData ===null ) {  
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
          <Route exact path={[`/`, `/home`]} render = {(props)=> <Home   homeData = {homeData}   {...props}  />} />
          <Route exact path={[ `/my23`]} render = {(props)=> <My23  my23Data = {my23Data} {...props} />} />
          <Route exact path={[ `/gallery`]} render = {(props)=> <Gallery galleryData = {galleryData}  {...props} />} />
          <Route exact path = {['/upload']}  render = {(props)=> <Upload uploadData = {uploadData}  {...props} />}  />
          <Route exact path ={[ '/contact' ]}  render = {(props)=> <Contact contactData = {contactData}  {...props}  />} />
     
          </Switch> 
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

//  <Footer/>

//     <Route exact path = '/snpcodeload'    render = {(props)=> <SnpCodeLoad  galleryData = {galleryData}  {...props} />} />

/*        { process.env.NODE_ENV === 'production' ?
            <p>
              This is a production build from create-react-app.
            </p>
          : <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
        }*/