import { Link } from "react-router-dom";

const CustomButton1 = ({ value, bgColor }) => {
  return (
    <Link
      to="#"
      className={`${bgColor} font-bold text-sm text-gray-200 py-2
       flex justify-center items-center rounded-xl shadow-lg w-full`}
    >
      {value}
    </Link>
  );
};
export default CustomButton1;
