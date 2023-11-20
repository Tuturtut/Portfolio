import './App.css';
function App() {
  const arrowNumber = 15; // Remplace avec le nombre souhaité


  return (
    <div className="App">
      <body>
        <h1 className="Title">ARTHUR SIMONIN</h1>
        <h1 className="Project">Projects</h1>
        <div className="arrows-right">
          {getArrows(arrowNumber, "right")}
        </div>
        <div className="line">
          <hr />
        </div>
        <div className="arrows-left">
          {getArrows(arrowNumber, "left")}
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
