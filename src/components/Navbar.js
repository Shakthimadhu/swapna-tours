import { Menuitems } from "./Menuitems";
import { useRef, useEffect } from "react";

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


    return ( 
        <nav ref={headerRef} className="Navitems">
            <h1 className="logo">Swapna Tours</h1>
            <ul className="nav_menu">
                {Menuitems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className="nav-links" href={item.url}><i className={item.icon}></i>{item.title}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar;