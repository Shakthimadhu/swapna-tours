import Footer from "../Footer";
import Hero from "../Hero"
import Navbar from "../Navbar"
import Aboutimage from "../assets/about.jpg"
function About() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={Aboutimage}
                title="ABOUT US"

                url="/"
                btnClass="none"
            />
            <Footer />
        </>
    )
}
export default About;