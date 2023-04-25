import { Link } from "react-router-dom";

const CustomButton1 = ({ value, to, styles }) => {
  return (
    <Link to={to} className={`${styles} button1`}>
      {value}
    </Link>
  );
};
export default CustomButton1;
