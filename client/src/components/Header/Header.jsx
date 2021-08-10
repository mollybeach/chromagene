import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import company from '../../assets/Icons/company.svg';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
      <Link to="/" className="header__logo" alt="ChromaGene Logo">   
          <img className ="header__rainbow"src={company} alt=''></img>
          </Link>
        <ul className="header__nav-list"> 
          <li>
            <NavLink to="/" exact className="header__nav-item" activeClassName="header__nav-item--active"><span>Home</span></NavLink>
          </li>
          <li>
            <NavLink to="/my23" className="header__nav-item" activeClassName="header__nav-item"><span>My 23</span></NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className="header__nav-item" activeClassName="header__nav-item"><span>Gallery</span></NavLink>
          </li>
          <li>
            <NavLink to="/upload" className="header__nav-item" activeClassName="header__nav-item"><span>Upload</span></NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="header__nav-item" activeClassName="header__nav-item"><span>Contact</span></NavLink>
          </li>
         
        </ul>

   
      </nav>

    </header>
  )
}


export default Header;