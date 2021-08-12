import React from 'react';
import { NavLink } from 'react-router-dom';
import company from '../../assets/Icons/company.svg';
import './Header.scss';

function Header() {
  return (
    <header className="header">
        <nav className="header__nav">
            <ul className="nav__sidenav nav--right"> 
                <li >
                      <NavLink to="/" className="header__logo" alt="ChromaGene Logo">   <img  class='header__img' src={company} alt="" /> </NavLink>
                </li>
                <li>
                      <NavLink to="/my23" className="header__link" activeClassName="header__link"><span>My 23</span></NavLink>
                </li>
                <li>
                      <NavLink to="/gallery" className="header__link" activeClassName="header__link"><span>Gallery</span></NavLink>
                </li>
                <li>
                      <NavLink to="/upload" className="header__link" activeClassName="header__link"><span>Upload</span></NavLink>
                </li>
                <li>
                      <NavLink to="/contact" className="header__link" activeClassName="header__link"><span>Contact</span></NavLink>
                </li>
              </ul>


      </nav>
    </header>
  )
}


export default Header;