import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <>
      <div className="masked-background">
        <Board />
        <div className="mask"></div>
      </div>
    </>
  );
}

export default App;
