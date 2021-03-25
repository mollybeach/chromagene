import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './components/Home/Home';
import Upload from './components/Upload/Upload';
import Email from './components/Email/Email';
import Header from "./components/Header/Header";
import Gallery from './components/Home/Home';
import GalleryDetails from "./components/GalleryDetails/GalleryDetails";
import EditGallery from "./components/EditGallery/EditGallery";
import ContactItemDetails from "./components/ContactItemDetails/ContactItemDetails";
import NewGallery from "./components/NewGallery/NewGallery";
import Contact from "./components/Contact/Contact";
import EditContactItem from "./components/EditContactItem/EditContactItem";
import Footer from './components/Footer/Footer';
import AddContactItem from "./components/AddContactItem/AddContactItem";
class App extends Component {
  state = {
    galleryList : null,
    singleWarehouse :null,
    contactList: null
}

componentDidMount(){
axios.get('http://localhost:8080/home')
   .then(res=>{
       this.setState({
           homeList :res.data
       })
       axios.get('http://localhost:8080/contact')
       .then(res=>{
         this.setState({
           conrtactList :res.data
         })
       })
   }
 )  
}
  render() {
    const {galleryList,contactList} = this.state;
    if(galleryList===null ) {
      return <p className = "Home__loading">Loading...</p>
    }
    if( contactList===null ) {
      return <p className = "Contact__loading">Loading...</p>
    }
    return (
      <div className = 'app'>
        <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={[`/`, `/home`]} render = {(props)=> <Home gallery = {galleryList} galleryList ={galleryList} {...props} />} />
           <Route exact path={[`/`, `/gallery`]} render = {(props)=> <Gallery gallery = {galleryList} galleryList ={galleryList} {...props} />} />
          <Route exact path={[`/`, `/gallery`]} render = {(props)=> <Upload gallery = {galleryList} galleryList ={galleryList} {...props} />} />
          <Route exact path='/email' render={(props) => <Email galleryList={galleryList} contactList={contactList} {...props} />} />
          <Route exact path='/gallery/:id' render={(props) => <GalleryDetails galleryList={galleryList} contactList={contactList} {...props} />} />
            <Route exact path = '/gallery/:id/edit' render = {(props)=> <EditGallery galleryList = {galleryList} {...props} />} />
            <Route exact path = '/gallery/add' render = {(props)=> <NewGallery {...props}  />}  />
          <Route exact path = '/contact'    render = {(props)=> <Contact contactList={contactList} {...props} />} />
            <Route exact path='/contact/add' render={(props) => <AddContactItem {...props} contactList={contactList} galleryList={galleryList} />} />
          <Route exact path = '/contct/:id'  render={(props)=> <ContactItemDetails {...props} contactList = {contactList} />} />
          <Route exact path = '/contact/:id/edit' render = {(props)=> <EditContactItem  {...props} contactList ={contactList} galleryList ={galleryList}/> } />
        </Switch>
        <Footer/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;