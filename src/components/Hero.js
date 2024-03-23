import "./HeroStyles.css"
function Hero(props) {
   return (
      <>
         <div className={props.cName}>
            <img alt="heroimg" src={props.heroImg} />
            <div className="hero-text">
               <h1>{props.title}</h1>
               <p>{props.text}</p>
               <div>
                  <a href={props.url} className={props.btnClass}>{props.btntext}</a>
               </div>
            </div>
         </div>
      </>
   )
}
export default Hero;