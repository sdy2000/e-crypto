import { Link } from "react-router-dom";

const CustomButton1 = ({ value, to, icon1, icon2, styles, onClick }) => {
  return (
    <Link onClick={onClick} to={to} className={`${styles} button2`}>
      {icon1}
      {value}
      {icon2}
    </Link>
  );
};
export default CustomButton1;
