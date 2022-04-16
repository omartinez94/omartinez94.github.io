import './App.css';
import Counter from './components/Counter';
import Header from './components/Header';
import Image from './components/Image';
import MergedText from './components/MergedText';
import Text from './components/Text';
import { useCountdown } from './hooks/useCountdown';

function App() {
  const dateTarget = new Date(2022, 8, 13, 0, 0, 0);
  const [days, hours, minutes, seconds] = useCountdown(dateTarget);
  const day = `
    ${dateTarget.getDate()} ${dateTarget.toLocaleString("es-MX", { month: "short" })} ${dateTarget.getFullYear()}
  `;


  const goToDirection = () => {
    const url =
      "https://www.google.com/maps/dir/Arena+Monterrey,+Av.+Francisco+I.+Madero+2500,+Centro,+64010+Monterrey,+N.L./@25.680855,-100.288276,15z/data=!4m7!4m6!1m5!1m1!1s0x86629563d91a6a9f:0x4833b800750556fa!2m2!1d-100.288276!2d25.680855";
      window.open(url, "_blank")
  }

  return (
    <div className="App">
      <Header>
        <img
          className="hero-topimg"
          src="img\myfifteen.png"
          alt="imagen inicio de invitacion"
        />
        <h1 className="hero-text">Vale Medina Salazar</h1>
        <div className="hero-counter">
          <p>{day}</p>
          <img className="hero-divider" src="img\divider-2.png" alt="divider" />
          <Counter days={days} hours={hours} minutes={minutes} secs={seconds} />
        </div>
      </Header>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bg"
        style={{position:"relative", bottom:"-1px"}}
      >
        <path
          fill-opacity="1"
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
      <Image src="img\myxv-light.png" alt="mis quince" />
      <br />
      <Text
        text={
          "Apreciariamos muchisimo tu asistencia en este evento tan importante en mi vida"
        }
      />
      <br />
      <div style={{ width: "35%", margin: "0 auto" }}>
        <Image src="img\myheel-light.png" alt="mi tacon" />
      </div>
      <Text text="El dia" opaque={true} asTitle={true} />
      <Text text={day} />
      <Text text="La direccion" opaque={true} asTitle={true} />
      <Text text="Inserte una direccion valida aqui #900, Santa Catarina N.L." />
      <div className="image-anchor" onClick={goToDirection()}>
        <img src="img\mypointer-light.png" alt="mi puntoero" />
        <p>Vee la ubicación en el mapa</p>
      </div>
      <br />
      <br />
      <MergedText backText={"te esperamos"} frontText={"Gracias"} />
      <br />
      <br />
      <br />
      <Image src="img\mydress-light.png" alt="mis quince" />
      <br />
      <br />
    </div>
  );
}

export default App;
