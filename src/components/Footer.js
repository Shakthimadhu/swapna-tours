import "./Footerstyles.css"
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1 className="footer-h1">Swapna Tours</h1>
                    <p>Travel Made Easy.</p>
                </div>
                <div>
                    <a href="/">
                    <FaFacebook />
                    </a>
                    <a href="/">
                    <FaFacebook />
                    </a>
                    <a href="/">
                    <FaFacebook />
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Services</h4>
                    <a href="/">Airport Taxi</a>
                    <a href="/">Outstation Taxi</a>
                    <a href="/">Local Taxi</a>
                </div>
                <div>
                    <h4>Services</h4>
                    <a href="/">Airport Taxi</a>
                    <a href="/">Outstation Taxi</a>
                    <a href="/">Local Taxi</a>
                </div>
                <div>
                    <h4>Services</h4>
                    <a href="/">Airport Taxi</a>
                    <a href="/">Outstation Taxi</a>
                    <a href="/">Local Taxi</a>
                </div>
                <div>
                    <h4>Services</h4>
                    <a href="/">Airport Taxi</a>
                    <a href="/">Outstation Taxi</a>
                    <a href="/">Local Taxi</a>
                </div>
            </div>
        </div>
    )
}
export default  Footer;