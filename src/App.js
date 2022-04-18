import './App.css';
import Counter from './components/Counter';
import Header from './components/Header';
import Image from './components/Image';
import MergedText from './components/MergedText';
import Text from './components/Text';
import { useCountdown } from './hooks/useCountdown';

import myfifteen from "./assets/img/myfifteen.svg";
import myxv from "./assets/img/myxv.svg";
import mypointer from "./assets/img/mypointer.svg";
import mydress from "./assets/img/mydress.svg";
import myheel from "./assets/img/myheel.svg";
import Loader from './components/Loader';
import { useState, useEffect } from "react";

const goToDirection = () => {
  const url = "https://goo.gl/maps/5fhbG37fNcWNELNB9";
  window.open(url, "_blank");
};

function App() {
  const dateTarget = new Date(2022, 8, 13, 0, 0, 0);
  const [days, hours, minutes, seconds] = useCountdown(dateTarget);
  const day = `
    ${dateTarget.getDate()} ${dateTarget.toLocaleString("es-MX", {
    month: "short",
  })} ${dateTarget.getFullYear()}
  `;
  // https://es.vexels.com/svg-png/quince/p/2/

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const loader = (
    <section className="fade">
      <Loader />
    </section>
  );

  const content = (
    <section className='fade'>
      <Header>
        <img
          className="hero-topimg"
          src={myfifteen}
          alt="imagen inicio de invitacion"
        />
        <h1 className="hero-text">Vale Medina Salazar</h1>
        <div className="hero-counter">
          <p>{day}</p>
          <img
            className="hero-divider"
            src={require("./assets/img/divider-2.png")}
            alt="divider"
          />
          <Counter days={days} hours={hours} minutes={minutes} secs={seconds} />
        </div>
      </Header>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bg"
        fill="#282c34"
        style={{ position: "relative", bottom: "-1px" }}
      >
        <path
          fillOpacity="1"
          fill="#282c34"
          d="M0,128L60,106.7C120,85,240,43,360,21.3C480,0,600,0,720,26.7C840,53,960,107,1080,122.7C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <MergedText
        backText={"a mis padres"}
        frontText={"Jose Medina & Carmen Salazar"}
      />
      <br />
      <br />
      <br />
      <Text
        text={
          "Les complace extenderle la más coordial de las invitaciones, a celebrar junto conmigo y mi familia"
        }
      />
      <br />
      <Image light={true} src={myxv} alt="mis quince" />
      <br />
      <Text
        text={
          "Apreciariamos muchisimo tu asistencia en este evento tan importante en mi vida"
        }
      />
      <br />
      <div style={{ width: "35%", margin: "0 auto" }}>
        <Image src={myheel} alt="mi tacon" />
      </div>
      <Text text="El dia" opaque={true} asTitle={true} />
      <Text text={day} />
      <Text text="A las" opaque={true} asTitle={true} />
      <Text text="19:00 hrs" />
      <Text text="La direccion" opaque={true} asTitle={true} />
      <Text text="Inserte una direccion valida aqui #900, Santa Catarina N.L." />
      <div className="image-anchor" onClick={goToDirection}>
        <img src={mypointer} alt="mi puntero" />
        <p>
          Vee la ubicación en el mapa <br />
          <small>(Haz click en esta sección)</small>
        </p>
      </div>
      <br />
      <br />
      <MergedText backText={"te esperamos"} frontText={"Gracias"} />
      <br />
      <Image src={mydress} alt="mis quince" />
      <br />
      <br />
    </section>
  );

  return (
    <div className="App">
      {isLoading ? loader : content}     
    </div>
  );
}

export default App;
