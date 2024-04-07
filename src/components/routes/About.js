import Footer from "../Footer";
import Hero from "../Hero"
import Navbar from "../Navbar"
import Aboutimage from "../assets/about.jpg"
function About() {
    return (
        <>
            <Hero
                cName="hero-mid"
                heroImg={Aboutimage}
                title="ABOUT US"

                url="/"
                btnClass="none"
            />
        </>
    )
}
export default About;