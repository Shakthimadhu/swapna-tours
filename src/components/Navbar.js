import { Menuitems } from "./Menuitems";
import { useRef, useEffect } from "react";
import logo from './assets/Swapnatours_logo.png';
import Callicon from './assets/callicon.png';
import Whatsappicon from './assets/Whatsappicon.png';

function Navbar() {
    let prevScrollpos = window.scrollY;
    let headerRef = useRef();

    useEffect(() => {
        window.onscroll = function () {
            var currentScrollPos = window.scrollY;
            if (prevScrollpos > currentScrollPos) {
                headerRef.current.style.top = "20px";
            } else {
                headerRef.current.style.top = "-100px";
            }
            prevScrollpos = currentScrollPos;
        }
    }, []);

    const handleCallClick = () => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
            window.open('tel:7676365293');
        }
    };

    return (
        <nav ref={headerRef} className="Navitems">
            <a href="/" className="logo-link">
                <img src={logo} alt="Logo" className="logo" />
            </a>
            <div className="icons">
                <img src={Callicon} alt="callicon" className="call-icon" onClick={handleCallClick} />
                <a href="https://wa.me/7676365293?text=I'm%20interested%20in%20booking%20Car%20from%20Swapna%20Tours%20"><img src={Whatsappicon} alt="callicon" className="whatsapp-icon" /></a>
            </div>
            <ul className="nav_menu">
                {Menuitems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className="nav-links" href={item.url}>
                                <i className={item.icon}></i>
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Navbar;
