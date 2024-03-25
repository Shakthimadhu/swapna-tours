import "./Localcarsstyles.css";
import LocalcarData from "./Localcarsdata";
import Tempotravels from "./assets/tempotravels.png";
import Etios from './assets/etios.png';
import Innova from './assets/Innova.png';
import TT from './assets/TT.jpg';

function LocalRide() {
  return (
    <div className="Airportride">
      <h1>Local Taxi</h1>
      <p>Take our popular Trips in considerations in Swapna Tours</p>
      <div className="Airportridecard">
        <LocalcarData
          image={Etios}
          heading={"Sedan Cab AC"}
          text="Price  : ₹1200"
          text1="Included : ₹4hrs 40 Kms"
          text2=" Extra Km : ₹13/Km"
          text3="Extra Hour : ₹150/Hr"
          text4="Seating Capacity : 4+1"
          url="https://wa.me/6366226642?text=I'm%20interested%20in%20booking%20Sedan%20Cab%20Ac%20(Local%20Taxi%204hrs-40kms%20)%20from%20Swapna%20Tours%20"

        />
        <LocalcarData
          image={Innova}
          heading={"Toyoto Innova AC"}
          text="Price  : ₹2000"
          text1="Included : ₹4hrs 40 Kms"
          text2=" Extra Km : ₹20/Km"
          text3="Extra Hour : ₹200/Hr"
          text4="Seating Capacity : 7+1"
          url="https://wa.me/6366226642?text=I'm%20interested%20in%20booking%20Toyoto%20Innova%20Ac%20(Local%20Taxi%204hrs-40kms%20)%20from%20Swapna%20Tours%20"
        />
        <LocalcarData
          image={TT}
          heading={"Tempo Traveller NON AC"}
          text="Price  : ₹3500"
          text1="Included : ₹8hrs 80 Kms"
          text2=" Extra Km : ₹20/Km"
          text3="Extra Hour : ₹300/Hr"
          text4="Seating Capacity : 12+1"
          url="https://wa.me/6366226642?text=I'm%20interested%20in%20booking%20Tempo%20Traveller%20Ac%20(Local%20Taxi%208hrs-80kms%20)%20from%20Swapna%20Tours%20"
        />
        <LocalcarData
          image={Tempotravels}
          heading={"Tempo Traveller AC"}
          text="Price  : ₹4000"
          text1="Included : ₹8hrs 80 Kms"
          text2=" Extra Km : ₹20/Km"
          text3="Extra Hour : ₹300/Hr"
          text4="Seating Capacity : 12+1"
          url="https://wa.me/6366226642?text=I'm%20interested%20in%20booking%20Tempo%20Traveller%20Non%20Ac%20(Local%20Taxi%208hrs-80kms%20)%20from%20Swapna%20Tours%20"
        />
        <LocalcarData
          image={TT}
          heading={"Tempo Traveller NON AC"}
          text="Price  : ₹4000"
          text1="Included : ₹8hrs 80 Kms"
          text2=" Extra Km : ₹20/Km"
          text3="Extra Hour : ₹300/Hr"
          text4="Seating Capacity : 14+1"
          url="https://wa.me/6366226642?text=I'm%20interested%20in%20booking%20Tempo%20Traveller%20Non%20Ac%2014%20Seater%20(Local%20Taxi%208hrs-80kms%20)%20from%20Swapna%20Tours%20"

        />
        <LocalcarData
          image={Tempotravels}
          heading={"Tempo Traveller AC"}
          text="Price  : ₹4500"
          text1="Included : ₹8hrs 80 Kms"
          text2=" Extra Km : ₹20/Km"
          text3="Extra Hour : ₹300/Hr"
          text4="Seating Capacity : 14+1"
          url="https://wa.me/6366226642?text=I'm%20interested%20in%20booking%20Tempo%20Traveller%20Ac%2014%20Seater%20(Local%20Taxi%208hrs-80kms%20)%20from%20Swapna%20Tours%20"

        />
      </div>
    </div>
  );
}

export default LocalRide;