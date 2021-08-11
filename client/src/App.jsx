import React, { useCallback, useEffect, useState } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import Contact from "./components/Contact/Contact";
import My23 from './components/My23/My23';

import Upload from "./components/Upload/Upload";
import './App.scss'
//import company from './assets/Icons/company.svg';
//import ring from './assets/Icons/DNA-Circle.svg';
require('dotenv').config();
    

console.log(process.env.REACT_APP_API_URL);
console.log(process.env.REACT_APP_HOST);

function App() {
  const [message, setMessage] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [url] = useState('/api');
  //const [homeData] = useState('/homeApi');
 // const [my23Data] = useState('/my23Api');
 // const [galleryData] = useState('/galleryApi');
 // const [uploadData] = useState('/uploadApi');
 // const [contactData] = useState('/contactApi');

  

  const fetchData = useCallback(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        setMessage(json.message);
        setIsFetching(false);
      }).catch(e => {
        setMessage(`API call failed: ${e}`);
        setIsFetching(false);
      })
  }, [url]);

  useEffect(() => {
    setIsFetching(true);
    fetchData();
  }, [fetchData]);

  return (
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
    <div className="App">
<strong>
          {isFetching
            ? 'Fetching message from API'
            : message}
        </strong>
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path={[`/`, `/home`]} render = {(props)=> <Home   {...props}  />} />
          <Route exact path={[ `/my23`]} render = {(props)=> <My23 {...props} />} />
          <Route exact path={[ `/gallery`]} render = {(props)=> <Gallery  {...props} />} />
          <Route exact path={[ `/gallery`]} render = {(props)=> <Gallery   {...props} />} />
          <Route exact path = {['/upload']}  render = {(props)=> <Upload  {...props} />}  />
          <Route exact path ={[ '/contact' ]}  render = {(props)=> <Contact   {...props}  />} />
     
          </Switch> 
        </BrowserRouter>
    </div>
  );

}

export default App;
