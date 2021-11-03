import "./style.css";

const CharCard = ({ person }) => {
  return (
    <div className={person.status}>
      <p>{person.name}</p>
      {console.log(person)}
      {console.log(person.status)}
      <img src={person.image} alt="" />
    </div>
  );
};

export default CharCard;
