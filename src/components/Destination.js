import Airportimg from "./assets/Airport.jpg"
import Airportimg2 from "./assets/Airport2.jpg"
import Outstationimg1 from "./assets/Outstationtaxi1.jpg"
import Outstationimg2 from "./assets/Outstationtaxi2.jpg"
import Localtaxiimg1 from "./assets/Localtaxi1.jpg"
import Localtaxiimg2 from "./assets/Localtaxi2.jpg"

import "./Destinationstyles.css"
import ServiceData from "./ServicesData"
const Desination = () =>{
    return(
        <div className="services-page" id="services-page">
        <div className="destination" >
            <h2>Popular Services</h2>
            <p>Luxury transportation at affordable rates, Book your rides with us</p>
            <ServiceData 
            className="first-des"
            heading="Airport Taxi"
            text="Bangalore Airport taxi
            Swapna Tours are disinfected thoroughly before and after every trip -
             the drivers are trained to follow Govt issued precautionary guidelines 
             to ensure customer safety. 
             No extra Toll charges ( Toll-free road trip for Airport Pickup & Drop)
             24/7 Airport Cabs in Bangalore at affordable prices."
            img1={Airportimg}
            img2={Airportimg2}
           />
           <ServiceData 
            className="first-des-reverse"
            heading="Outstation Taxi"
            text="Book your outstation taxi with Swapna Tours for a safe and secure drive experience.
             Our professional drivers ensure your comfort and peace of mind throughout your journey.
              Enjoy hassle-free travel with us."
            img1={Outstationimg1}
            img2={Outstationimg2}
            />
              <ServiceData 
              className="first-des"
            heading="Local Taxi"
            text="For local transportation needs, rely on Swapna Tours for convenient and reliable taxi services. 
            Our local drivers are familiar with the area and committed to providing a safe and comfortable ride. 
            Experience seamless travel with us today."
            img1={Localtaxiimg1}
            img2={Localtaxiimg2}
            />
        </div>
        </div>
    )
}
export default Desination