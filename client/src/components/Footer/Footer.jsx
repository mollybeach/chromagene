import React, {Component} from 'react';
import './Footer.scss';
import fb from '../../assets/Icons/Icon-facebook.svg';
import tw from '../../assets/Icons/Icon-twitter.svg';
import insta from '../../assets/Icons/Icon-instagram.svg';
class Footer extends Component {
    render(){
    return (
    <footer className="footer">
        <div className="footer__directory">
            <div className="footer__partition-card">
		         <div className="footer__partition-top">
                        <div>ChromoGene</div>
                        <div> Directory</div>

                </div>
                
                <div className="footer__partition-bottom">
                <div>Molly Beach</div>
                     <div className="footer__partition-bottom">Toronto, Ontario M5V 1L7</div>
                      <div className="footer__email">info@thechromogene.com </div>
                </div>
            </div>
            <div className="footer__partition-card">
                <div className="footer__partition-top">
                <div>Molly Beach</div>
                    <div> Artist Group International </div>
                </div>
                 <div className="footer__partition-bottom">
                    <div>Booking Agent for </div>
                    <div className="footer__partition-bottom">US / South America / Japan</div>
                    <div className="footer__email">info@artistgraphicgrp.com</div>
                </div>
            </div>
            <div className="footer__partition-card">
                <div className="footer__partition-top">
                    <div> ThreeJS</div>
                    <div> Artist Graphic Group International </div>
                </div>
             <div className="footer__partition-bottom">
                <div>Questions </div>
                    <div className="footer__partition-bottom">Contact Us M-F</div>
                    <div className="footer__email">apply@artistgraphicsgrp.com</div>
                </div>
            </div>
           </div>
           <div className="footer__social">
             <img alt='fb' className='footer__ico'src={fb} />
             <img alt='fb' className='footer__ico'src={tw} />
             <img alt='fb' className='footer__ico'src={insta} />
             </div>
           <div className="footer__partition-base">Copyright ChromeGene Inc. © 2021</div>
           <div className="footer__partition-base">All Rights Reserved</div>
   
    </footer>    
    )}
}

export default Footer;

