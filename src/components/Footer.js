import "./Footerstyles.css"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from './assets/LOGO-FOOTER.jpg'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="new_footer_area bg_color">
      <div className="new_footer_top">
        <div className="footer-link-container">
          <div>
            {/* <div className="col-lg-3 col-md-6">
              <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInLeft;">
                <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                <p>Don’t miss any updates of our new templates and extensions.!</p>
                <form action="#" className="f_subscribe_two mailchimp" method="post" novalidate="true" _lpchecked="1">
                  <input type="text" name="EMAIL" className="form-control memail" placeholder="Email"></input>
                    <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
                    <p className="mchimp-errmessage" style="display: none;"></p>
                    <p className="mchimp-sucmessage" style="display: none;"></p>
                </form>
              </div>
            </div> */}
            <div>
              <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInLeft' }}>
                  <div><Link to={`/airporttaxi`}>Airport Taxi</Link></div>
                  <div><Link to={`/OutstationTaxi`}>Outstation Taxi</Link></div>
                  <div><Link to={`/Localtaxi`}>Local Taxi</Link></div>
              </div>
            </div>
            <div>
              <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInLeft' }}>
                <div className="f_social_icon">
                  <a
                    href="https://www.facebook.com/Sharath.Swapnatours8304/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://wa.me/6366226642?text=I'm%20interested%20in%20booking%20Cars%20from%20Swapna%20Tours%20"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href="https://www.instagram.com/swapnatours/?igsh=MThyM2x3dzBjdm0xNw%3D%3D"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bg">
          <div className="footer_bg_one"></div>
          <div className="footer_bg_two"></div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-7">
              <p className="mb-0 f_400">© Swapna Tours 2024 All rights reserved.</p>
              <p style={{marginTop: '5px'}}>Nagamuneshwara Badavane, Hosur Rd, Parappana Agrahara, Bengaluru, Karnataka 560100</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;