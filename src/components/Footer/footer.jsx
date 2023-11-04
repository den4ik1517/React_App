import './footer.css'
import facebook from '../../image/facebook.png'
import twitter from '../../image/twitter.png'
import linkedin from '../../image/linkedin.png'
import google from '../../image/google.jpg'

const Footer = () => {
   return (
      <div style={{ borderTop: "1px solid black", padding: "20px"}}>
         <div className="footer__envelopment">
            <div className="footer__envelopment-text">
               <h4 className="footer__title">Branding stuff</h4>
               <p className="footer__text small__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo</p>
            </div>
            <div className="logo-footer">LOGO</div>
            <div className="socials">
               <img src={facebook} alt="facebook" className="facebook" />
               <img src={twitter} alt="twitter" className="twitter" />
               <img src={linkedin} alt="linkedin" className="linkedin" />
               <img src={google} alt="google" className="google" />
            </div>
         </div>
         <p className="footer__copyright">
            2023 IoT © Copyright all rights reserved, bla bla
         </p>
      </div>
   )
}

export default Footer;