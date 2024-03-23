import "./Ridedata.css"
import { IoLogoWhatsapp } from "react-icons/io";

function RideData(props) {
    return (
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt="image"></img>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <br></br>
            <div>
                <a target="blank" href="https://wa.me/7676365293?text=I'm%20interested%20in%20booking%20Car%20from%20Swapna%20Tours%20"
                 className="whatsapp-link">
                    <IoLogoWhatsapp  />
                    <span>Whatsapp</span>
                </a>
            </div>
            <br></br>
        </div>
    )
}

export default RideData;
