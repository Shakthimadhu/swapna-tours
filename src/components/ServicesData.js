import "./Destinationstyles.css"
import Airportimg from "./assets/Airport.jpg"
import Airportimg2 from "./assets/Airport2.jpg"
import { Component } from "react";
class ServiceData extends Component{
    render(){
        return(
            <div className={this.props.className}>
              <div className="des-text">
                <h2>{this.props.heading}</h2>
                <p>
                {this.props.text} 
                </p>
                <button>Enquire Now</button>
              </div>
              <div className="image">
                <img alt="AirportTaxi" src={this.props.img1} />
                <img alt="AirportTaxi" src={this.props.img2} />
              </div>
            </div>     
        )
    }
}
export default ServiceData;