import "./Outstationcarsstyles.css";
import OutstationcarData from "./Outstationcarsdata";
import Tempotravels from "./assets/tempotravels.png";
import Etios from './assets/etios.png';
import Innova from './assets/Innova.png';
import TT from './assets/TT.jpg';

function OutstationRide() {
  return (
    <div className="Outstationride">
      <h1 className="Outstation-h1">Outstation Taxi</h1>
      <p>Book our outstation taxi for safe and secure service</p>
      <div className="Airportridecard">
        
        <OutstationcarData
          image={Innova}
          heading={"Toyoto Innova AC"}
          text="Price Per Km : ₹16.00/Km"
          text1="Driver BATA : ₹400/Day"
          text2=" Per day Km : 300/Km"
          text3="Seating Capacity : 7+1"
          url="https://wa.me/6366226642?text=I'm%20interested%20in%20booking%20Toyoto%20Innova%20AC%20(Outstation%20Taxi)%20from%20Swapna%20Tours%20"
        />
        <OutstationcarData
          image={Etios}
          heading={"Sedan Cab AC"}
          text="Price Per Km : ₹11.00/Km"
          text1="Driver BATA : ₹350/Day"
          text2=" Per day Km : 300/Km"
          text3="Seating Capacity : 4+1"
          url="https://wa.me/6366226642?text=I'm%20interested%20in%20booking%20Sedan%20Cab%20AC%20(Outstation%20Taxi)%20from%20Swapna%20Tours%20"
        />
        <OutstationcarData
          image={TT}
          heading={"Tempo Traveller NON AC"}
          text="Price Per Km : ₹17.00/Km"
          text1="Driver BATA : ₹500/Day"
          text2=" Per day Km : 300/Km"
          text3="Seating Capacity : 12+1"
          url="https://wa.me/6366226642?text=I'm%20interested%20in%20booking%20Tempo%20Traveller%20Non%20AC%20(Outstation%20Taxi)%20from%20Swapna%20Tours%20"

        />
        <OutstationcarData
          image={Tempotravels}
          heading={"Tempo Traveller AC"}
          text="Price Per Km : ₹19.00/Km"
          text1="Driver BATA : ₹500/Day"
          text2=" Per day Km : 300/Km"
          text3="Seating Capacity : 12+1"
          url="https://wa.me/6366226642?text=I'm%20interested%20in%20booking%20Tempo%20Traveller%20AC%20(Outstation%20Taxi)%20from%20Swapna%20Tours%20"

        />
        <OutstationcarData
          image={TT}
          heading={"Tempo Traveller NON AC"}
          text="Price Per Km : ₹20.00/Km"
          text1="Driver BATA : ₹600/Day"
          text2=" Per day Km : 300/Km"
          text3="Seating Capacity : 14+1"
          url="https://wa.me/6366226642?text=I'm%20interested%20in%20booking%20Tempo%20Traveller%20Non%20AC%2014seater%20(Outstation%20Taxi)%20from%20Swapna%20Tours%20"

        />
        <OutstationcarData
          image={Tempotravels}
          heading={"Tempo Traveller AC"}
          text="Price Per Km : ₹22.00/Km"
          text1="Driver BATA : ₹600/Day"
          text2=" Per day Km : 300/Km"
          text3="Seating Capacity : 14+1"
          url="https://wa.me/6366226642?text=I'm%20interested%20in%20booking%20Tempo%20Traveller%20AC%2014seater%20(Outstation%20Taxi)%20from%20Swapna%20Tours%20"

        />
      </div>
    </div>
  );
}

export default OutstationRide;