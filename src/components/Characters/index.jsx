import CharCard from "../CharCard";
import "./style.css";
const Characters = ({ characterList }) => {
  return (
    <div className="all-content">
      <h2>Meus personagens</h2>
      <div className="char-list">
        {characterList.map((char) => (
          <CharCard character={char} key={char.id} />
        ))}
      </div>
    </div>
  );
};

export default Characters;
