import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import dnaImg from '../../assets/Icons/dna.png';
import company from '../../assets/Icons/company.svg';
import company2 from '../../assets/Icons/company2.svg';
import basicdna from '../../assets/Icons/basicdna.svg';
import xx from '../../assets/images/chromocom.png' ///Users/mollybeach/Documents/git/molly-beach-chromagene/client/src/assets/images/chromocom.png
import './Header.scss';
//   <img className ="header__rainbow"src={xx} alt=''></img> 
//  <text x="20%" text-anchor="top" y="20%" dy="0.4em" fill="url(#pattern)" font-family="sonos-logoregular" font-size="35vh">Gene</text>
//  <img className="header__basicdna"src={basicdna} alt=''></img>
//<img className ="header__rainbow"src={company2}   alt=''></img>

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
      <Link to="/" className="header__logo" alt="ChromaGene Logo">   
          <img className ="header__rainbow"src={company} alt=''></img>
       
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
         
        </ul>
      </nav>
      

    </header>
  )
}
//  <img className ="header__rainbow"src={company2} alt=''></img>
//  <img className ="header__rainbow2"src={company} alt=''></img>

export default Header;