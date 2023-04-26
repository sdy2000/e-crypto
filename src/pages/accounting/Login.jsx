import { Link } from "react-router-dom";
import { AccountingInput, AccountingModal } from "../../components";
import useForm from "../../store/hooks/useForm";

const getFreshLoginModel = () => ({
  email: "",
  password: "",
});

const Login = ({ onClose }) => {
  const { values, handleInputChange } = useForm(getFreshLoginModel);

  //
  //
  // TODO : Add Validation for input
  //
  //

  return (
    <AccountingModal onClose={onClose}>
      <div className="flex justify-center items-center gap-8 text-2xl text-p mb-14">
        <button className="font-extrabold border-b-4 border-lblue pb-4 hover:text-t duration-300">
          Log In
        </button>
        <button className="font-semibold pb-4 hover:text-t duration-300">
          Sing Up
        </button>
      </div>
      <form className=" w-full flex flex-col justify-start gap-6">
        <div className="account-form flex flex-col justify-start gap-2 w-full">
          <div className="flex justify-between">
            <label className="text-p text-sm font-semibold" htmlFor="email">
              Email Address
            </label>
          </div>
          <AccountingInput
            type={"email"}
            name={"email"}
            placeholder={"Enter your email address..."}
            onChange={handleInputChange}
            value={values.email}
          />
        </div>
        <div className="account-form flex flex-col justify-start gap-2 w-full">
          <div className="flex justify-between">
            <label className="text-p text-sm font-semibold" htmlFor="email">
              Password
            </label>
            <Link className="text-t hover:text-blue duration-300" to="#">
              Forgot password?
            </Link>
          </div>
          <AccountingInput
            type={"password"}
            name={"password"}
            placeholder={"Enter your password..."}
            onChange={handleInputChange}
            value={values.password}
            hasIcon={true}
          />
        </div>
        <input
          className="button1 bg-blue rounded-lg py-3 text-lg font-semibold mb-6"
          type="submit"
          value="Log In"
        />
      </form>
    </AccountingModal>
  );
};
export default Login;
