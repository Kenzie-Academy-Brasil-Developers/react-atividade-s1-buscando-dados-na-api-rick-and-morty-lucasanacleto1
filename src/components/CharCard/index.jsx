import "./style.css";
const CharCard = ({ character }) => {
  let charName;

  character.name.length > 15
    ? (charName = character.name.substr(0, 15) + "...")
    : (charName = character.name);

  return (
    <div className={`card-content-${character.status}`}>
      <p className={`card-title-${character.status}`}>{charName}</p>
      <img className="card-img" src={character.image} alt="" />
    </div>
  );
};
export default CharCard;
