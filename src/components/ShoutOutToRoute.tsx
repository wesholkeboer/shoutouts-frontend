import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ShoutOut from "../models/ShoutOut";
import { getShoutOutsByTo, postShoutOut } from "../services/shoutOutService";
import ShoutOutForm from "./ShoutOutForm";
import ShoutOutItem from "./ShoutOutItem";
import "./ShoutOutToRoute.css";

interface RouteParams {
  name: string;
}

const ShoutOutToRoute = () => {
  const [shoutOuts, setShoutOuts] = useState<ShoutOut[]>();
  const { name } = useParams<RouteParams>();
  const getShoutOuts = async () => {
    setShoutOuts(await getShoutOutsByTo(name));
  };

  useEffect(() => {
    getShoutOuts();
  }, [name]);

  const addShoutOut = async (shoutOut: ShoutOut) => {
    await postShoutOut(shoutOut);
    getShoutOuts();
  };

  return (
    <div className="ShoutOutToRoute">
      <h1>Shout Outs to {name}</h1>
      <Link to="/">Back to all shout outs</Link>
      <ul>
        {shoutOuts?.map((item) => (
          <ShoutOutItem item={item} key={item._id} />
        ))}
      </ul>
      <ShoutOutForm addShoutOut={addShoutOut} name={name} />
    </div>
  );
};

export default ShoutOutToRoute;
