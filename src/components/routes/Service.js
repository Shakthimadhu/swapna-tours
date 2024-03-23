import Footer from "../Footer";
import Hero from "../Hero"
import Navbar from "../Navbar"
import Aboutimage from "../assets/about.jpg"
function Service(){
    return(
     <>
     <Navbar/>
 <Hero 
 cName="hero-mid"
 heroImg={Aboutimage}
 title="SERVICE"
 url="/"
 btnClass="none"
 />
 <Footer/>
     </>   
    )
    }
    export default Service;