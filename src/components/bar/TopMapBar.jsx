import { Link } from "react-router-dom";
import { capitalize } from "../../utils";

const TopMapBar = ({ category, id }) => {
  return (
    <div className="map-top-var">
      <Link to="/">Cryptocurrencies</Link>
      <span>{">"}</span>
      <Link to="/">{category}</Link>
      <span>{">"}</span>
      <span className="text-p">{capitalize(id)}</span>
    </div>
  );
};
export default TopMapBar;
