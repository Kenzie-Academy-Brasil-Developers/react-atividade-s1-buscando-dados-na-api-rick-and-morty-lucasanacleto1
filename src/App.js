import { useState, useEffect } from "react";
import Characters from "./components/Characters";
import "./App.css";

function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results));
  }, []);

  return (
    <div className="App">
      <Characters characterList={characterList} />
    </div>
  );
}

export default App;
