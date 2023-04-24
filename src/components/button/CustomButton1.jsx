import { Link } from "react-router-dom";

const CustomButton1 = ({ value, icon1, icon2, bgColor }) => {
  return (
    <Link
      to="#"
      className={`${bgColor} font-bold text-sm text-gray-200 py-2
       flex justify-center items-center gap-2 rounded-xl shadow-lg w-full duration-300`}
    >
      {icon1}
      {value}
      {icon2}
    </Link>
  );
};
export default CustomButton1;
