import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
//import Gallery from './components/Gallery/Gallery';
import Contact from "./components/Contact/Contact";
import My23 from './components/My23/My23';
import UploadFile from "./components/UploadFile/UploadFile";
//import Footer from './components/Footer/Footer';
import './App.scss'
import company from './assets/Icons/company.svg';


class App extends Component {
  state = {
    my23List: null,
    galleryList : null,
    updateList: null,
    //contactList : null,
    homeList : null,
}
componentDidMount(){
  axios.get('http://localhost:8080/home')
  .then(res=>{
    this.setState({
      homeList:res.data
    })
  axios.get('http://localhost:8080/my23')
    .then(res=>{
      this.setState({
        my23List:res.data
      })
    axios.get('http://localhost:8080/gallery').then(res=>{
        this.setState({
          galleryList:res.data
        })
   
  })
    })
    })
}

  render() {
    const { homeList, my23List, galleryList} = this.state;
    if(homeList ===null ) {  
      return <> 
     <img className ="app__rainbows"src={company} alt=''></img>
       <div className = "app__load"></div>
       <div className = "app__text"> Thank you for waiting patiently. There's alot to load here! :) </div>
       </>
    }
    return (
      <div className = 'app'>
        <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={[`/`, `/home`]} render = {(props)=> <Home   homeList = {homeList}   {...props}  />} />
          <Route exact path={[`/`, `/my23`]} render = {(props)=> <My23  my23List = {my23List} {...props} />} />
         
          <Route exact path = '/uploadfile' render = {(props)=> <UploadFile/>}  />
          <Route exact path = '/contact'    render = {(props)=> <Contact  />} />
          </Switch> 
        
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
/// <Route exact path={[`/gallery`]} render = {(props)=> <Gallery galleryList = {galleryList}  {...props} />} />
//  <Footer/>



