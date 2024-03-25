import "./Ridedata.css"
import RideData from "./Ridedata";
import Tempotravels from "./assets/tempotravels.png"
function Ride(){
    return(
        <div className="ride">
            <h1>Recent Trips</h1>
            <p>Take our popular Trips in considerations in Swapna Tours</p>
            <div className="ridecard">
                <RideData
                image={Tempotravels}
                heading={"40km and 4 hours"}
                text="Swapna Tours provides a ccomfotability to an ption 0f 4 hours and 40 kms trip where you can select the particular vehicle of your choice for your travel"

                />
                <RideData
                image={Tempotravels}
                heading={"40km and 4 hours"}
                text="Swapna Tours provides a ccomfotability to an ption 0f 4 hours and 40 kms trip where you can select the particular vehicle of your choice for your travel"

                />
                <RideData
                image={Tempotravels}
                heading={"40km and 4 hours"}
                text="Swapna Tours provides a ccomfotability to an ption 0f 4 hours and 40 kms trip where you can select the particular vehicle of your choice for your travel"

                />
                 <RideData
                image={Tempotravels}
                heading={"40km and 4 hours"}
                text="Swapna Tours provides a ccomfotability to an ption 0f 4 hours and 40 kms trip where you can select the particular vehicle of your choice for your travel"

                />
                
                
            </div>
        </div>
    );
}
export default Ride;