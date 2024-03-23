import { Component } from "react";
import "./Navbarstyles.css";
import { Menuitems } from "./Menuitems";

class Navbar extends Component{
   
    render(){
        return(
            <nav className="Navitems">
                <h1 className="logo">Swapna Tours</h1> 
                <ul className="nav_menu">
                    {Menuitems.map((item,index) => {
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
} 
export default Navbar;