import React, { Component } from 'react';
import chevronImg from '../../assets/Icons/chevron_right-24px.svg';
import dnaImg from '../../assets/Icons/dna.png';
import './Home.scss';
let data = {
    957640:	'C',
    959509:'T',
    973336:	'A',
    974494: '0'
    }
    
    let pixel;
    
    let dnaArray = Object.values(data);
    
    console.log(dnaArray);
    
    dnaArray.forEach(element => {
    console.log(element);
    if(element === 'C'){
            console.log('red');
            pixel='red';
           
    }
    if (element === 'T'){
        console.log('green');
        pixel='green';
    }
    if (element === 'A'){
        console.log('blue');
        pixel='blue';
    }
    if (element === '0'){
        console.log('white');
        pixel='white';
    }
    else{
        console.log('yellow')
        pixel='yellow';
    }
    return(pixel);
    });
    
    console.log(pixel);

class Home extends Component {
    
    render() {
        return (
            <div className ='home'> Welcome to ChromaGene
           
            <div className="home__subtitle">Featured Sculptures
            <img className = 'home__arrow' src={chevronImg} alt=""/>
            </div>
            <img className = 'home__dna' src={dnaImg} alt=""/>
            <div className="playBox">{pixel}</div>
            </div>
        );
    }
}

export default Home;