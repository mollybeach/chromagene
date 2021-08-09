import React, { Component } from "react";
import { Link } from 'react-router-dom';
import chevronImg from "../../assets/Icons/chevron_right-24px.svg";
import "./Home.scss";


class Home extends Component {
  render() {
    return (
      <div>
        <div className="home">
          <div className="hero-container "></div>
          <div className="content"></div>
          <div className='home__inside '>
          <div className="home__title ">ChromaGene
          <img className="home__arrow" src={chevronImg} alt="img" />
          </div>
          <div className="home__subtitle ">Welcome to ChromaGene!</div>
          <div className="home__about " >
            Start your journey by uploading a DNA.txt or.csv file. A SNP  
            (Single-Nucleotide Polymorphism) is a single nucleotide polymorphism 
            (A, G, C or T). a 25-megabyte text file containing which represents
            a minuscule variation against a common shared source code
            Even though it represents millions of years of development,the data can
             be moved to your device in seconds.We provide an identifier (an rsid or 
             an internal id) for each SNP, as well as its position on the reference 
             human genome and the genotype call oriented toward the plus strand on 
             the human reference sequence.
            <div className="home__buttons">
            <Link to="/uploadfile">  <button className="btn btn--delta" type="submit"><span>Get Started</span></button></Link>
            </div>
          </div>
          </div>
        </div>
        <div className="content">
        </div>
        <div className="content"></div>
      </div>
    );
  }
}

export default Home;
  
  