import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [arrowNumber, setArrowNumber] = useState(0);
  const [arrowSize, setArrowSize] = useState(Math.round(window.innerWidth / 20)); // Ajoutez cette ligne
  const [spaceBetweenArrows, setSpaceBetweenArrows] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      let innerWidth = window.innerWidth;
      // Ajuster le nombre de flèches en fonction de la largeur de l'écran
      setArrowNumber(Math.round(innerWidth / 400) + 3);

      // Ajuster la taille de chaque flèche en fonction de la largeur de l'écran
      setArrowSize(Math.round(innerWidth / 14));

      // Ajuster l'espace entre les flèches en fonction de la largeur de l'écran

      let value = -Math.round(innerWidth / 1000);
      console.log(value);
      setSpaceBetweenArrows(value);

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
          {getArrows(arrowNumber, "right", arrowSize, spaceBetweenArrows)}
        </div>
        <hr className="line" />
      </div>

      <div className="projects"></div>

      <div className="ProjectDecoration">
        <hr className="line" />
        <div className="arrows-left">
          {getArrows(arrowNumber, "left", arrowSize, spaceBetweenArrows)}
        </div>
      </div>


    </div>
  );
}

function getArrows(number, direction, size, space) {

  const fleches = [];
  console.log("espacement etre les fleches : " + space)
  for (let i = 0; i < number; i++) {
    fleches.push(<svg
      key={i}
      className={`arrow ${direction}`}
      width={size}
      height={size}
      viewBox="0 0 86 87"
      fill="none"
      style={
        {
          marginRight: space + "rem",
          marginLeft: space + "rem",
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
