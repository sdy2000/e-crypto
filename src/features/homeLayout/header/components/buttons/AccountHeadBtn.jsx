import { Link } from "react-router-dom";

const AccountHeadBtn = ({ value, to, styles, onClick }) => {
  return (
    <Link onClick={onClick} to={to} className={`${styles} button1`}>
      {value}
    </Link>
  );
};
export default AccountHeadBtn;
