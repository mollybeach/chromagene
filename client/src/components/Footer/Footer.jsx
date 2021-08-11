import React from 'react';
import './Footer.scss';
/*
import fb from '../../assets/Icons/Icon-facebook.svg';
import tw from '../../assets/Icons/Icon-twitter.svg';
import insta from '../../assets/Icons/Icon-instagram.svg';
import { Link} from 'react-router-dom';
import company from '../../assets/Icons/company.svg';*/

const Gallery = () => {
    //let [galleryApi, setGalleryApi] = useState([]);
 
        return (
    <footer id="footer">
    <div id="footer-utility">
        <div className="footer__chat">
            <ul className="footer__ul"><h3 className="footer__left">À propos de nous</h3>
                <li className="footer__li"><a className="footer__a" href="#/">Politique de confidentialité</a></li>
                <li className="footer__li"><a className="footer__a" href="/#">Termes et conditions</a></li>
                <li className="footer__li"> <img className="footer__chat-img-icon footer__li" width="18" height="14" src="https://res.cloudinary.com/cloudinary-account/image/upload/v1469462241/msg_jn0whe.svg" href="/#" alt='chat'/>Chat</li>
                <li className="footer__li"> <img className="footer__chat-img-icon footer__li" width="15" height="15" src="https://res.cloudinary.com/cloudinary-account/image/upload/v1469462243/phone_zfj4ey.svg" href="/#"alt='numberphone' />1-253-306-3470</li>
            </ul>
        </div>
        <div className="footer__partition"></div>
        <div className="footer__about">
            <ul className="footer__ul">
                <h3 className="footer__left">Madeleine Dupont</h3>
                <li className="footer__li"><a className="footer__a" href="/#">madeleinesalondecoiffure@gmail.com</a></li>
                <li className="footer__li"><a className="footer__a" href="/#">© 2021, Madeleine Salon de Coiffure</a></li>
            </ul>
        </div>
        <div className="footer__partition"></div>
        <div className="footer__card">
            <ul className="footer__ul">
                <h3 className="footer__left">À propos de nous</h3>
                <li className="footer__li"><a className="footer__a" href="/#">Politique de confidentialité</a></li>
                <li className="footer__li"><a className="footer__a" href="/#">Termes et conditions</a></li>
            </ul>
        </div>
    </div>
    <a  href="/" className="footer__a"><img className='footer__logo' src="https://res.cloudinary.com/madeleinesalondecoiffure/image/upload/v1627668880/skeletoncrest_t9zecb.svg" alt="" /></a>
    <div id="footer-newsletter-social">
        <div id="footer-newsletter">
            <h3 className="footer__center">Get more deals with Madeleine</h3>
                <div className='footer__enter'>
                    <input type="text" placeholder="Enter email address" className="getemailform"/>
                    <input className="enteremailbutton" type="submit" value="Sign Up" />
                </div>
            </div>
            <div id="footer-social">
                <a className="footer__a" href="https://www.facebook.com/madeleine.beach.3" target="_blank" rel="noreferrer"   > <img width="34" height="34" src="https://res.cloudinary.com/madeleinesalondecoiffure/image/upload/v1627669349/facebook_eknuzn_drzww6.svg" alt="facebook" /></a>
                <a className="footer__a" href="https://twitter.com/madecoiffure" target="_blank" rel="noreferrer" > <img width="34" height="34" src="https://res.cloudinary.com/madeleinesalondecoiffure/image/upload/v1627669267/twitter_nfohqw_wdseyj.svg" alt="twitter" /></a> 
                <a className="footer__a" href="https://pin.it/5qgAohs" target="_blank" rel="noreferrer" > <img width="34" height="34" src="https://res.cloudinary.com/dmoo9az8w/image/upload/v1475715814/pinterest_vtom0c.svg" alt="pintrest" /></a > 
                <a className="footer__a" href="https://www.instagram.com/madeleinebeachh/" target="_blank" rel="noreferrer"  > <img width="34" height="34" src="https://res.cloudinary.com/madeleinesalondecoiffure/image/upload/v1627669343/instagram_u4wt1i_br0ox6.svg" alt="instagram"/> </a>
                <a className="footer__a" href="http://youtube.com/madeleinesalondecoiffure" target="_blank" rel="noreferrer"   > <img width="34" height="34" src="https://res.cloudinary.com/madeleinesalondecoiffure/image/upload/v1627677813/youtubeicon_u5ks3w.svg" alt="youtube" /></a>
            </div>
        </div>       
        <div className="footer__border"></div>
        <div id="footer-copyright">
            <div className="footer__law">
            <ul className="footer__ul">
                <li className="footer__li footer__copy"> © 2021 Madeleine Salon de Coiffure.</li>
                <li className="footer__li footer__copy"> Privacy Policy | Terms + Conditions | Sitemap</li>
                <li className=" footer__li footer__copy"> Washington | Transparency in Supply Chains Act</li>
            </ul>
            </div>
        </div>
</footer>
          );
      }
  
  
  export default Gallery;

