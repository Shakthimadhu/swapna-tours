import "./HeroStyles.css"
import { RiWhatsappFill } from "react-icons/ri";

function Hero(props) {
   return (
      <>
         <div className={props.cName}>
            <img alt="heroimg" src={props.heroImg} />
            <div className="hero-text">
               <h1>{props.title}</h1>
               <p>{props.text}</p>
               <div>
                  <a href={props.url} target="_blank" className={props.btnClass}>
                     <RiWhatsappFill />
                     {props.btntext}
                  </a>
               </div>
            </div>
         </div>
      </>
   )
}
export default Hero;