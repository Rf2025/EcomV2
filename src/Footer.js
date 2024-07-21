

import React from 'react';
import footerCSS from './Footer.module.css'; 
import facebook from './facebook.png'
import instagram from './instagram.png'
import twitter from './twitter.jpeg'
import logo from './silogo.jpeg'
function Footer() {
  return (
    <footer>
      <div className={footerCSS.footerLogoContainer}>
       <a href="/home"><img src={logo} className={footerCSS.footerLogo} alt="everythingSi-logo"></img></a>
      </div>
      <div className={footerCSS.footerContent}>
        <div className={footerCSS.newsletterContainer}>
          <h2>Newsletter</h2>
          <p>Keep up with our newest products!</p>
          <form>
            <input type="email" name="email" placeholder="Your email address" className={footerCSS.input} />
            <button type="submit" className={footerCSS.subBtn}>Subscribe</button>
          </form>
        </div>

        <div className={footerCSS.footerLinks}>
          <div className={footerCSS.footerContainer}>
            <h3>Policies</h3>
            <a href='/'>Privacy Policy</a>
            <a href='/'>Terms and Conditions</a>
            <a href='/'>Shipping</a>
            <a href='/'>Returns</a>
            <a href='/'>Cancellation Policy</a>
          </div>

          <div className={footerCSS.footerContainer}>
            <h3>Site Links</h3>
            <a href='/'>Home</a>
            <a href='/products'>Products</a>
            <a href='/contact'>Contact</a>
            <a href='/'>Custom Tunes</a>
            <a href='/'>Careers</a>
            <a href='/'>Car Meets</a>
          </div>

          <div className={footerCSS.footerContainer}>
            <h3>Tech Tips</h3>
            <a href='/'>How to modify your car</a>
            <a href='/'>Choosing the right tune</a>
            <a href='/'>Custom E-tunes</a>
          </div>
        </div>
      </div>
      <div className={footerCSS.socialHeading}>
     <h3>Follow us on social media!</h3>
     </div>
      <div className={footerCSS.socialIconsContainer}>
    
        <a href="https://wwww.facebook.com" target='_blank'  rel="noreferrer"  className={footerCSS.links}>
           <img className={footerCSS.socialIcon} src={facebook} alt="facebookLogo"/>
        </a>
        <a href="https://www.instagram.com/" target='_blank'  rel="noreferrer"  className={footerCSS.links}>
           <img className={footerCSS.socialIcon} src={instagram} alt="instagramLogo"/>
        </a>
        <a href="https://x.com/?lang=en" target='_blank'  rel="noreferrer" className={footerCSS.links}>
            <img className={footerCSS.socialIcon} src={twitter} alt="twitterLogo"/>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
