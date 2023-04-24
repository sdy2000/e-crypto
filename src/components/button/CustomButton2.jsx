import { Link } from "react-router-dom";

const CustomButton1 = ({ value, to, icon1, icon2, style }) => {
  return (
    <Link to={to} className={`${style} button2`}>
      {icon1}
      {value}
      {icon2}
    </Link>
  );
};
export default CustomButton1;
