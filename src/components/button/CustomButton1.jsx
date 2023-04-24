import { Link } from "react-router-dom";

const CustomButton1 = ({ value, to, style }) => {
  return (
    <Link to={to} className={`${style} button1`}>
      {value}
    </Link>
  );
};
export default CustomButton1;
