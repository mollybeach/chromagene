import React from 'react';
import './Footer.scss';
/*
import fb from '../../assets/Icons/Icon-facebook.svg';
import tw from '../../assets/Icons/Icon-twitter.svg';
import insta from '../../assets/Icons/Icon-instagram.svg';
import { Link} from 'react-router-dom';
import company from '../../assets/Icons/company.svg';*/

const Footer= () => {
    //let [galleryApi, setGalleryApi] = useState([]);
 
        return (
            <footer id="footer">
            <div id="footer-utility">
                <div class="footer__chat imgborderround">
                    <ul class="footer__ul"><h3 class="footer__left">Chromagene</h3>
                        <li class="footer__li"><a class="footer__a" href="/#">Privacy Policy</a></li>
                        <li class="footer__li"><a class="footer__a" href="/#">Terms and Conditions</a></li>
                        <li class="footer__li"> <img class="footer__chat-img-icon footer__li" width="18" alt="footer"  height="14" src="https://res.cloudinary.com/cloudinary-account/image/upload/v1469462241/msg_jn0whe.svg" href="#" />Chat</li>
                        <li class="footer__li"> <img class="footer__chat-img-icon footer__li" width="15"   alt="footer"height="15" src="https://res.cloudinary.com/cloudinary-account/image/upload/v1469462243/phone_zfj4ey.svg" href="#" />1-253-306-3470</li>
                    </ul>
                </div>
                <div class="footer__partition"></div>
                <div class="footer__about">
                    <ul class="footer__ul">
                        <h3 class="footer__left">Molly Beach</h3>
                        <li class="footer__li"><a class="footer__a" href="/#">chromagene@gmail.com</a></li>
                        <li class="footer__li"><a class="footer__a" href="/#">© 2021, Chromagene</a></li>
                    </ul>
                </div>
                <div class="footer__partition"></div>
                <div class="footer__card">
                    <ul class="footer__ul">
                        <h3 class="footer__left">ABOUT US</h3>
                        <li class="footer__li"><a class="footer__a" href="/#">Privacy Policy</a></li>
                        <li class="footer__li"><a class="footer__a" href="/#">Terms and Conditions</a></li>
                    </ul>
                </div>
            </div>
            <a  href="/" class="footer__a" ><img class='footer__logo' src="https://res.cloudinary.com/chromagene/image/upload/v1628703086/dna/company_k746rb.svg" alt="" /></a>
            <div id="footer-newsletter-social">
                <div id="footer-newsletter">
                    <h3 class="footer__center">Discover more with Chromagene</h3>
                    <div class='footer__enter'>
                        <input type="text" placeholder="Enter email address" class="getemailform"/>
                        <input class="enteremailbutton" type="submit" value="Sign Up" />
                    </div>
                </div>
                <div id="footer-social">
                    <a class="footer__a" href="https://www.facebook.com/" target="_blank" rel="noreferrer"> <img width="34" height="34" src="https://res.cloudinary.com/chromagene/image/upload/v1628704820/dna/facebook_gtzwdj.svg" alt="facebook" /></a>
                    <a class="footer__a" href="https://twitter.com/chromagene" target="_blank" rel="noreferrer"> <img width="34" height="34" src="https://res.cloudinary.com/chromagene/image/upload/v1628704801/dna/twitter_jfyf8d.svg" alt="twitter" /></a> 
                    <a class="footer__a" href="https://github.com/mollybeach/chromagene" target="_blank" rel="noreferrer"> <img width="34" height="34" src="https://res.cloudinary.com/chromagene/image/upload/v1628713456/dna/github_cswvy4.png" alt="pintrest" /></a > 
                    <a class="footer__a" href="https://www.instagram.com/" target="_blank" rel="noreferrer"> <img width="34" height="34" src="https://res.cloudinary.com/chromagene/image/upload/v1628704828/dna/instagram_bollab.svg" alt="instagram"/> </a>
                    <a class="footer__a" href="http://youtube.com/" target="_blank" rel="noreferrer"> <img width="34" height="34" src="https://res.cloudinary.com/chromagene/image/upload/v1628704814/dna/youtube_obyfsl.svg" alt="youtube" /></a>
                </div>
            </div>       
            <div class="footer__border"></div>
            <div id="footer-copyright">
                <div class="footer__law">
                <ul class="footer__ul">
                    <li class="footer__li footer__copy"> © 2021 Chromagene.</li>
                    <li class="footer__li footer__copy"> Privacy Policy | Terms + Conditions | Sitemap</li>
                    <li class=" footer__li footer__copy"> Washington | Transparency in Supply Chains Act</li>
                </ul>
                </div>
            </div>
            
    </footer>
        );
    }

export default Footer;

