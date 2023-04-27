import { Link } from "react-router-dom";
import { AccountingInput, AccountingModal } from "../../components";
import useForm from "../../store/hooks/useForm";

const getFreshLoginModel = () => ({
  email: "",
  password: "",
});

const SingUp = ({ onClose }) => {
  const { values, handleInputChange } = useForm(getFreshLoginModel);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const login = Object.fromEntries(formData);
    console.log(login);
  };

  //
  //
  // TODO : Add Validation for input
  //
  //
  return (
    <AccountingModal onClose={onClose}>
      <div className="flex justify-center items-center gap-8 text-2xl text-p mb-14">
        <button className="font-semibold pb-4 hover:text-t duration-300">
          Log In
        </button>
        <button className="font-extrabold border-b-4 border-lblue pb-4 hover:text-t duration-300 ">
          Sing Up
        </button>
      </div>
      <form
        className=" w-full flex flex-col justify-start gap-6"
        onSubmit={handleFormSubmit}
      >
        <div className="flex flex-col justify-start gap-2 w-full">
          <div className="flex justify-between">
            <label className="text-p text-sm font-semibold" htmlFor="email">
              Email Address
            </label>
          </div>
          <AccountingInput
            type={"email"}
            name={"email"}
            id={"email"}
            placeholder={"Enter your email address..."}
            onChange={handleInputChange}
            value={values.email}
          />
        </div>
        <div className="flex flex-col justify-start gap-2 w-full">
          <div className="flex justify-between">
            <label className="text-p text-sm font-semibold" htmlFor="password">
              Password
            </label>
          </div>
          <AccountingInput
            type={"password"}
            name={"password"}
            id={"password"}
            placeholder={"Enter your password..."}
            onChange={handleInputChange}
            value={values.password}
            hasIcon={true}
          />
        </div>
        <div className="flex justify-start gap-2 w-full">
          <input type="checkbox" className="w-4 h-4" id="rules" />
          <label className="text-p text-sm font-semibold" htmlFor="rules">
            I agree to{" "}
            <Link to="#" className="text-blue hover:text-lblue">
              rules
            </Link>{" "}
            from ECrypto
          </label>
        </div>
        <input
          className="button1 bg-blue rounded-lg py-3 text-lg font-semibold mb-6 hover:bg-lblue duration-300"
          type="submit"
          value="Create an account"
        />
      </form>
    </AccountingModal>
  );
};
export default SingUp;
