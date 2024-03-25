import Desination from "../Destination"
import Hero from "../Hero"
import Navbar from "../Navbar"
import Ride from "../Ride"
import Footer from "../Footer"
import Testimonial from "../Testimonials"
import Details from "../Details"
import BookingForm from "../BookingForm"
import TitleContent from "../TitleContent"
import Gallery from "../Gallery"
import Heroimg from '../assets/heroimg7.jpg'
import Options from "../Options"
function Landing() {
    return (
        <>
            <Hero
                cName="hero"
                heroImg={Heroimg}
                title="Travel Made Easy"
                text="Plan Your Journey With Us"
                btntext="Enquire Now"
                url="https://wa.me/7676365293?text=I'm%20interested%20in%20booking%20Car%20from%20Swapna%20Tours%20"
                btnClass="show"
            />
            <TitleContent />
            <Details />
            <Options />
            <Ride />
            <Desination />
            <BookingForm />

            <Gallery />
            <br></br>
            <Testimonial />
            <Footer />
        </>
    )
}
export default Landing