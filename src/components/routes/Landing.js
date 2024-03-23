import Desination from "../Destination"
import Hero from "../Hero"
import Navbar from "../Navbar"
import Ride from "../Ride"
import Footer from "../Footer"
import Testimonial from "../Testimonials"
import Details from "../Details"
import BookingForm from "../BookingForm"
import TitleContent from "../TitleContent"
import TTravels from "../TTravels"
import Gallery from "../Gallery"
function Landing() {
    return (
        <>
            <Hero
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1532931899774-fbd4de0008fb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Travel Made Easy"
                text="Plan Your Journey With Us"
                btntext="Enquire Now"
                url="https://wa.me/7676365293?text=I'm%20interested%20in%20booking%20Car%20from%20Swapna%20Tours%20"
                btnClass="show"
            />
            <TitleContent />
            <Details />
            <TTravels />
            <br></br>
            <br></br>
            <Desination />
            <BookingForm />
            <Ride />
            <Gallery />
            <br></br>
            <Testimonial />
            <Footer />
        </>
    )
}
export default Landing