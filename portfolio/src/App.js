import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [arrowNumber, setArrowNumber] = useState(15);
  const [spaceBetweenArrows, setSpaceBetweenArrows] = useState(-26.25);
  const [svgSize, setSvgSize] = useState((5 * window.innerWidth) / 9);
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
        setSvgSize((5 * width) / 9);
      else setSvgSize(width / 1.05);

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
                {/*TODO: faire un seul gros svg  */}
        <table>
          <thead>
            <tr><th colSpan={4}><h1 className="skills-title">Skills</h1></th></tr>
          </thead>
          <tbody>

            <tr><th colSpan={8}>
              <h2 className="programming-language-subtitle">Programming language</h2>
            </th></tr>
            <tr>
              <th>
                <div className="svg-container">
                  
                  <svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.6207 65.1578C18.876 68.7185 39.375 76.0744 55.6033 69.1216C52.9451 68.0883 51.0386 66.8964 51.0386 66.8964C43.8023 68.2643 40.4454 68.3719 33.8765 67.6215C28.4551 67.0006 31.6207 65.1578 31.6207 65.1578ZM53.6603 58.2118C44.0686 60.0572 38.5283 59.9981 31.5111 59.2743C26.0851 58.7131 29.6371 56.0834 29.6371 56.0834C15.6009 60.7425 37.4512 66.0291 57.0689 60.2909C54.9837 59.5565 53.6603 58.2118 53.6603 58.2118ZM61.1768 17.9862C61.1775 17.9862 32.8007 25.071 46.3529 40.6885C50.3532 45.2937 45.3037 49.4342 45.3037 49.4342C45.3037 49.4342 55.4566 44.194 50.7948 37.6291C46.4393 31.5098 43.1003 28.4697 61.1768 17.9862ZM67.8161 71.8708C67.8161 71.8708 70.1596 73.8033 65.2342 75.2967C55.8696 78.1336 26.2498 78.9889 18.0227 75.4103C15.0676 74.1233 20.6119 72.339 22.3564 71.9625C24.1752 71.5687 25.2138 71.6404 25.2138 71.6404C21.9254 69.3248 3.95519 76.1892 16.0883 78.1582C49.1725 83.5212 76.3964 75.743 67.8161 71.8708ZM56.4453 51.7278C58.0358 50.6428 60.2325 49.7005 60.2325 49.7005C60.2325 49.7005 53.9744 50.8194 47.7395 51.3433C40.1068 51.9835 31.9195 52.1097 27.8096 51.5598C18.0798 50.2589 33.1441 46.6803 33.1441 46.6803C33.1441 46.6803 27.2923 46.2845 20.0992 49.7642C11.5912 53.8781 41.144 55.7534 56.4453 51.7278ZM60.1701 61.7851C60.0984 61.9776 59.8593 62.1941 59.8593 62.1941C80.6265 56.7349 72.9911 42.9503 63.0614 46.4392C62.1902 46.7474 61.7333 47.4639 61.7333 47.4639C61.7333 47.4639 62.2838 47.2421 63.5116 46.9858C68.5313 45.9399 75.7231 53.7054 60.1701 61.7851ZM42.6202 46.5302C39.5562 39.6047 29.1663 33.5458 42.6249 22.9168C59.4064 9.67077 50.7955 1.05389 50.7955 1.05389C54.2685 14.7389 38.5429 18.8727 32.8665 27.3953C29.001 33.2025 34.7637 39.4427 42.6202 46.5302ZM60.7319 80.8941C47.9905 83.2927 32.2741 83.0132 22.9553 81.4745C22.9553 81.4745 24.8639 83.055 34.6734 83.6865C49.5989 84.6408 72.525 83.1553 73.0668 76.0923C73.0675 76.0923 72.0243 78.7698 60.7319 80.8941Z" fill="#E4DFD9"/>
                  </svg>
                </div>
              </th>
            </tr>
          </tbody>

        </table>
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
