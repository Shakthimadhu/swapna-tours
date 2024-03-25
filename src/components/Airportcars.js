import "./Airportcarsstyles.css";
import AirportcarData from "./Airportcarsdata";
import Tempotravels from "./assets/tempotravels.png";
import Etios from './assets/etios.png';
import Innova from './assets/Innova.png';
import TT from './assets/TT.jpg';

function AirportRide() {
  return (
    <div className="Airportride">
      <h1>Airport Taxi</h1>
      <p>Book our Airport taxi for fast,safe and secure service.</p>
      <div className="Airportridecard">
        <AirportcarData
          image={Etios}
          heading={"Sedan Cab AC"}
          text="Price : ₹949"
          text1="Toll Gate : ₹105 extra"
          text3="Seating Capacity : 4+1"
          url="https://wa.me/6366226642?text=I'm%20interested%20in%20booking%20Sedan%20Cab%20AC%20(AirportTaxi)%20from%20Swapna%20Tours%20"
        />
        <AirportcarData
          image={Innova}
          heading={"Toyoto Innova AC"}
          text="Price  : ₹1799"
          text1="Toll Gate : ₹105 extra"
          text3="Seating Capacity : 6+1"
          url="https://wa.me/6366226642?text=I'm%20interested%20in%20booking%20Toyoto%20Innova%20AC%20(AirportTaxi)%20from%20Swapna%20Tours%20"
        />
        <AirportcarData
          image={TT}
          heading={"Tempo Traveller NON AC"}
          text="Price  : ₹3500"
          text1="Toll Gate : ₹105 extra"
          text3="Seating Capacity : 12+1"
          url="https://wa.me/6366226642?text=I'm%20interested%20in%20booking%20Tempo%20Traveller%20NON%20AC%20(AirportTaxi)%20from%20Swapna%20Tours%20"
        />
        <AirportcarData
          image={Tempotravels}
          heading={"Tempo Traveller AC"}
          text="Price  : ₹3999"
          text1="Toll Gate : ₹105 extra"
          text3="Seating Capacity : 12+1"
          url="https://wa.me/6366226642?text=I'm%20interested%20in%20booking%20Tempo%20Traveller%20AC%20(AirportTaxi)%20from%20Swapna%20Tours%20"

        />
        
      </div>
    </div>
  );
}

export default AirportRide;