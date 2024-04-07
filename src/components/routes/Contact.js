import Footer from "../Footer";
import Hero from "../Hero"
import Navbar from "../Navbar"
import Aboutimage from "../assets/Contact.jpg"
function Contact() {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={Aboutimage}
        title="CONTACT US"
        url="/"
        btnClass="none"
      />
    </>

  )
}
export default Contact;