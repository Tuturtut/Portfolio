import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [arrowNumber, setArrowNumber] = useState(15);
  const [spaceBetweenArrows, setSpaceBetweenArrows] = useState(-26.25);
  const [skillsGridSize, setSkillsGridSize] = useState((5 * window.innerWidth) / 9);
  const [strokeWidth, setStrokeWidth] = useState(2);

  useEffect(() => {


    // Fonction de détection de changement de taille d'écran
    const handleResize = () => {
      let arrowNumber = 15;
      let width = window.innerWidth;
      let height = window.innerHeight;
      let ratio = width / height;
      console.log("ratio :" + width / height);
      console.log("width :" + width);
      console.log("height :" + height);
      console.log("StrokeWidth :" + strokeWidth);

      setArrowNumber(arrowNumber);
      setSpaceBetweenArrows(arrowNumber * -1.75)
      // Ajuster l'espace entre les flèches en fonction de la largeur de l'écran
      // let spacing = -Math.round(innerWidth / 5000) - 0.3;
      if (ratio > 1)
        setSkillsGridSize((5 * width) / 9);
      else setSkillsGridSize(width / 1.05);

      if (width < 450) {
        setStrokeWidth(1);
      }
      else {
        setStrokeWidth(2);
      }


    };

    // Écouter les changements de taille d'écran
    window.addEventListener('resize', handleResize);


    // Lancer la détection de changement de taille d'écran
    handleResize();

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
      <div className="skills_mySelf">

      </div>
      <div className="skills">
        {getSkillsGrid(skillsGridSize, strokeWidth)}
        <p>Test</p>
      </div>
      <div className="mySelf">

      </div>


    </div>


  );

}

function getArrows(number, direction, space) {

  const fleches = [];

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

function getSkillsGrid(size, strokeWidth) {
  const lines = [];
  const lineCount = 9;
  const gap = size / lineCount;

  for (let i = 0; i < lineCount; i++) {
    const yPos = i * gap;
    lines.push(
      <line key={i} y1={yPos} x2={size - gap / 5} y2={yPos} stroke="#E4DFD9" strokeWidth={strokeWidth} />
    );
  }

  for (let i = 0; i < lineCount; i++) {
    const xPos = i * gap;
    lines.push(
      <line key={i + lineCount} x1={xPos} y1="2" x2={xPos} y2={size - gap / 2} stroke="#E4DFD9" strokeWidth={strokeWidth} />
    );
  }

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {lines}
    </svg>
  );
}

export default App;
