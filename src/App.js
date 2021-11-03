import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [characterList, setcharacterList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((response) => setcharacterList(response.results));
  }, []);

  return (
    <div className="App">
      <Characters charList={characterList} />
    </div>
  );
}

export default App;
