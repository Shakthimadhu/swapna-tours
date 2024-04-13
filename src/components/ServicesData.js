import "./Destinationstyles.css"

import { Component } from "react";
import { RiWhatsappFill } from "react-icons/ri";

class ServiceData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>
            {this.props.text}
          </p>
          <a href="https://wa.me/6366226642?text=I'm%20interested%20in%20booking%20Car%20from%20Swapna%20Tours%20" target="_blank" className="enquire-now-btn">
            <RiWhatsappFill />
            <span>Enquire Now</span>
          </a>
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