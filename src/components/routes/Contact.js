import Footer from "../Footer";
import Hero from "../Hero"
import Navbar from "../Navbar"
import Aboutimage from "../assets/Contact.jpg"
function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={Aboutimage}
        title="CONTACT US"
        url="/"
        btnClass="none"
      />
      <Footer />
    </>

  )
}
export default Contact;