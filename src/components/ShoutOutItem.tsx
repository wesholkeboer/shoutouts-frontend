import { Link } from "react-router-dom";
import ShoutOut from "../models/ShoutOut";
import "./ShoutOutItem.css";

interface Props {
  item: ShoutOut;
}

const ShoutOutItem = ({ item }: Props) => {
  return (
    <li className="ShoutOutItem">
      <h2>
        Shout out to{" "}
        <Link to={`/user/${encodeURIComponent(item.to)}`}>{item.to}</Link>
      </h2>
      <p>
        - from{" "}
        <Link to={`/user/${encodeURIComponent(item.from)}`}>{item.from}</Link>
      </p>
      <p>{item.text}</p>
      {item.img && <img className="img" src={item.img} alt={item.to} />}
    </li>
  );
};

export default ShoutOutItem;
