import "./Outstationcarsstyles.css"
import { IoLogoWhatsapp } from "react-icons/io";

function OutstationcarData(props) {
    return (
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt="image"></img>
            </div>
            <h2>{props.heading}</h2>
            <br></br>
            <p className="trip-details">{props.text}</p>
            <p className="trip-details">{props.text1}</p>
            <p className="trip-details">{props.text2}</p>
            <p className="trip-details">{props.text3}</p>
            <br></br>
            <div>
                <a target="blank" href={props.url}
                 className="whatsapp-link">
                    <IoLogoWhatsapp  />
                    <span>Whatsapp</span>
                </a>
            </div>
            <br></br>
        </div>
    )
}

export default OutstationcarData;
