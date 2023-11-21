import './App.css';
function App() {
  const arrowNumber = 5; // Remplace avec le nombre souhaité


  return (
    <div className="App">
      <body>
        <h1 className="Title">ARTHUR SIMONIN</h1>
        <h1 className="ProjectTitle">Projects</h1>
        <div className="ProjectDecoration">
          <div className="arrows-right">
            {getArrows(arrowNumber, "right")}
          </div>
          <hr className="line" />
        </div>

        <div className="projects"></div>

        <div className="ProjectDecoration">
          <hr className="line" />
          <div className="arrows-left">
            {getArrows(arrowNumber, "left")}
          </div>
        </div>
      </body>
    </div>
  );
}

function getArrows(number, direction) {

  const fleches = [];
  for (let i = 0; i < number; i++) {
    fleches.push(<i key={i} className={"arrow " + direction}></i>);
  }
  return fleches;
}

export default App;
