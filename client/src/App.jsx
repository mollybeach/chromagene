import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home/Home';
import Header from "./components/Header/Header";
import Gallery from './components/Gallery/Gallery';
import Profile from './components/Profile/Profile';
import Contact from "./components/Contact/Contact";
//import Footer from './components/Footer/Footer';
import UploadFile from "./components/UploadFile/UploadFile";
import company from './assets/Icons/company.svg';
import './App.scss'

class App extends Component {
  state = {
    homeList: null,
    galleryList : null,
    updateList: null,
    contactList : null,
}
componentDidMount(){
  axios.get('http://localhost:8080/home')
    .then(res=>{
      this.setState({
        homeList:res.data
      })
    axios.get('http://localhost:8080/gallery').then(res=>{
        this.setState({
          galleryList:res.data
        })
    axios.get('http://localhost:8080/uploadfile').then(res=>{
        this.setState({
          uploadFileList:res.data
    })
    })
    axios.get('http://localhost:8080/contact').then(res=>{
      this.setState({
        contactList:res.data
  })
  })
    })
    })
}

  render() {
    const { homeList, galleryList, uploadFileList, contactList} = this.state;
    if(homeList===null ) {  return <> <p className = "gallery__loading">Loading...</p>
    <img className ="header__rainbow"src={company} alt=''></img> </>
     
    }
    if( galleryList===null ) {
      return <> <p className = "gallery__loading">Loading...</p>
      <img className ="header__rainbow"src={company} alt=''></img> </>
    }
    return (
      <div className = 'app'>
        <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={[`/`, `/home`]} render = {(props)=> <Home homeList = {homeList} {...props} />} />
          <Route exact path={[`/gallery`]} render = {(props)=> <Gallery galleryList = {galleryList}  {...props} />} />
          <Route exact path={[`/`, `/my23`]} render = {(props)=> <Profile  homeList = {homeList} {...props} />} />
          <Route exact path = '/uploadfile' render = {(props)=> <UploadFile  uploadFileList = {uploadFileList} {...props} />}  />
          <Route exact path = '/contact'    render = {(props)=> <Contact  {...props} contactList = {contactList} {...props} />} />
       
          </Switch> 
        
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

//  <Footer/>



