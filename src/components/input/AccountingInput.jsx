import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const AccountingInput = ({
  type,
  name,
  placeholder,
  onChange,
  value,
  isRequired = true,
  hasIcon = false,
}) => {
  const [isShowPass, setIsShowPass] = useState(false);
  return (
    <div className="accounting-input-div">
      <input
        type={isShowPass ? "text" : type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required={isRequired}
      />
      {hasIcon &&
        (!isShowPass ? (
          <BsEye
            onClick={() => {
              setIsShowPass(true);
            }}
            size={40}
          />
        ) : (
          <BsEyeSlash
            onClick={() => {
              setIsShowPass(false);
            }}
            size={40}
          />
        ))}
    </div>
  );
};
export default AccountingInput;
