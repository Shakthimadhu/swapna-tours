import "./Ridedata.css"

function RideData(props) {
    return (
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt="image"></img>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <br></br>
            <a href="https://wa.me/7676365293?text=I'm%20interested%20in%20booking%20Car%20from%20Swapna%20Tours%20" className="card-link">Whatsapp</a>
            <br></br>
        </div>
    )
}

export default RideData;
