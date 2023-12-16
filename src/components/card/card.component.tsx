import "./card.styles.css";
import { Monster } from "../../App";
import useStore from "../../store/store";

type CardProps = {
  monster: Monster;
};


const Card = ({ monster }: CardProps) => {
  const { id, name, email } = monster;
  const setDetail = useStore((state) => state.setDetail);
  const handleOpen = useStore((state) => state.handleOpen);

  const handleClick = () => {
    setDetail(monster);
    handleOpen();
  };

  return (
    <div className="card-container" onClick={handleClick}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
