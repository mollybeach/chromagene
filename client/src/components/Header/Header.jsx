import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import dnaImg from '../../assets/Icons/dna.png';
import company from '../../assets/Icons/company.svg';
import company2 from '../../assets/Icons/company2.svg';
import basicdna from '../../assets/Icons/basicdna.svg';
import './Header.scss';


function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
      <Link to="/" className="header__logo" alt="Health Logo">   
          <div className='header__company'>  
          <img className ="header__rainbow"src={company2} alt=''></img>
          <img className="header__basicdna"src={basicdna} alt=''></img>
          <img className ="header__rainbow2"src={company} alt=''></img>
        
          </div>
          </Link>
        <div className="header__partition-input">
        <input className="header__search-input" placeholder="Search"></input>
        </div>
        <ul className="header__nav-list">
          <li>
            <NavLink to="/" exact className="header__nav-item" activeClassName="header__nav-item--active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/my23" className="header__nav-item" activeClassName="header__nav-item--active">My 23</NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className="header__nav-item" activeClassName="header__nav-item--active">Gallery</NavLink>
          </li>
       
          <li>
            <NavLink to="/contact" className="header__nav-item" activeClassName="header__nav-item--active">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/upload" className="header__nav-item" activeClassName="header__nav-item--active">Upload</NavLink>
          </li>
            <NavLink to="/About" className="header__nav-item" activeClassName="header__nav-item--active">Upload</NavLink>
          <li>
              
         
       
          </li>
        </ul>
      </nav>
      

    </header>
  )
}
//  <img className ="header__rainbow"src={company2} alt=''></img>
//  <img className ="header__rainbow2"src={company} alt=''></img>

export default Header;