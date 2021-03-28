import React from 'react';
import './Footer.scss';

function Footer(props) {
    return (
    <footer>
        <div className="footer__directory">
            <div className="footer__partition-card">
		         <div className="footer__partition-top">
                        <div>Richard Rovner</div>
                        <div> The Bees Knees Management</div>
                </div>
                <div className="footer__partition-bottom">
                     <div>460 King Street West</div>
                     <div className="footer__partition-bottom">Toronto, Ontario M5V 1L7</div>
                      <div className="footer__email">info@thebeesknees.com </div>
                </div>
            </div>
            <div className="footer__partition-card">
                <div className="footer__partition-top">
                    <div> Marsha Vlasic</div>
                    <div> Artist Group International </div>
                </div>
                 <div className="footer__partition-bottom">
                    <div>Booking Agent for </div>
                    <div className="footer__partition-bottom">US / South America / Japan</div>
                    <div className="footer__email">marsha.vlasic@artistgrp.com</div>
                </div>
            </div>
            <div className="footer__partition-card">
                <div className="footer__partition-top">
                    <div> Marsha Vlasic</div>
                    <div> Artist Group International </div>
                </div>
             <div className="footer__partition-bottom">
                <div>Booking Agent for </div>
                    <div className="footer__partition-bottom">US / South America / Japan</div>
                    <div className="footer__email">marsha.vlasic@artistgrp.com</div>
                </div>
            </div>
           </div>
           <div className="footer__partition-base">Copyright The Bees Knees © 2018</div>
           <p className = 'footer__para'>© ChromeGene Inc. All Rights Reserved.</p>
    </footer>    
    );
}

export default Footer;
