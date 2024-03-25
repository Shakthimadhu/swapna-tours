import "./Footerstyles.css"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from './assets/LOGO-FOOTER.jpg'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <img src={logo} className="footer-h1" />
        </div>
        <div>
          <a href="https://www.facebook.com/Sharath.Swapnatours8304/"><FaFacebook className="social-icon" /></a>
          <a href="https://wa.me/6366226642?text=I'm%20interested%20in%20booking%20Cars%20from%20Swapna%20Tours%20"><FaWhatsapp className="social-icon" /></a>
          <a href="https://www.instagram.com/swapnatours/?igsh=MThyM2x3dzBjdm0xNw%3D%3D"><FaInstagram className="social-icon" /></a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Services</h4>
          <Link to={`/airporttaxi`}>Airport Taxi</Link>
          <Link to={`/OutstationTaxi`}>Outstation Taxi</Link>
          <Link to={`/Localtaxi`}>Local Taxi</Link>
        </div>
        <div>
          <h4>Gallery</h4>
          <Link to={`/`}>Our Gallery</Link>
        </div>
      </div>
      <p className="rights-p">@Copyrights Reserved Swapna Tours</p>
    </div>
  )
}

export default Footer;