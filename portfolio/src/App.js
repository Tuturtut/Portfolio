import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [arrowNumber, setArrowNumber] = useState(0);
  const [spaceBetweenArrows, setSpaceBetweenArrows] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      let innerWidth = window.innerWidth;

      let arrowNumber = 15;




      setArrowNumber(arrowNumber);
      setSpaceBetweenArrows(arrowNumber * -1.75)
      // Ajuster l'espace entre les flèches en fonction de la largeur de l'écran
      // let spacing = -Math.round(innerWidth / 5000) - 0.3;


    };

    // Écouter les changements de taille d'écran
    window.addEventListener('resize', handleResize);

    // Désabonner l'écouteur lors du démontage du composant
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="App">

      <h1 className="Title">ARTHUR SIMONIN</h1>
      <h1 className="ProjectTitle">Projects</h1>
      <div className="ProjectDecoration">
        <div className="arrows-right">
          {getArrows(arrowNumber, "right", spaceBetweenArrows)}
        </div>
        <hr className="line" />
      </div>

      <div className="projects"></div>

      <div className="ProjectDecoration">
        <hr className="line" />
        <div className="arrows-left">
          {getArrows(arrowNumber, "left", spaceBetweenArrows)}
        </div>
      </div>


    </div>
  );
}

function getArrows(number, direction, space) {

  const fleches = [];
  console.log("espacement etre les fleches : " + space)

  for (let i = 0; i < number; i++) {

    fleches.push(<svg
      key={i}
      className={`arrow ${direction}`}
      viewBox="0 0 86 87"
      fill="none"
      style={
        {
          marginRight: space / number + "vw",
          marginLeft: space / number + "vw",
        }
      }
    >
      <rect
        width="60.8323"
        height="14.6813"
        transform="matrix(0.703711 0.710487 -0.703711 0.710487 42.9692 0.687073)"
        fill="#E4DFD9"
      />
      <rect
        width="60.06"
        height="14.8701"
        transform="matrix(0.703711 -0.710487 0.703711 0.710487 33.0485 76.0144)"
        fill="#E4DFD9"
      />
    </ svg >);
  }
  return fleches;
}

export default App;
