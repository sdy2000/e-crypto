import { AccountingInput, AccountingModal, IconButton } from "../../components";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useForm } from "../../store";

const getFreshLoginModel = () => ({
  email: "",
  password: "",
});

const ForgotPassword = ({ onClose, openLogin, openSingUp }) => {
  const { values, handleInputChange } = useForm(getFreshLoginModel);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const login = Object.fromEntries(formData);
    console.log(login);
  };

  return (
    <AccountingModal onClose={onClose}>
      <div className="flex justify-center items-center gap-8 text-2xl text-p mb-14">
        <button
          onClick={() => {
            onClose();
            openLogin();
          }}
          className="font-extrabold border-b-4 border-lblue pb-4 hover:text-t duration-300"
        >
          Log In
        </button>
        <button
          onClick={() => {
            onClose();
            openSingUp();
          }}
          className="font-semibold pb-4 hover:text-t duration-300"
        >
          Sing Up
        </button>
      </div>
      <div className="flex flex-col gap-2 mb-6 self-start text-p">
        <IconButton
          value={
            <HiOutlineArrowLeft
              size={30}
              onClick={() => {
                onClose();
                openLogin();
              }}
            />
          }
        />
        <h2 className="text-3xl font-extrabold">Forgot your password?</h2>
        <p className="text-s">
          Enter your email below, you will receive an email with instructions on
          how to reset your password in a few minutes. You can also set a new
          password if you’ve never set one before.
        </p>
      </div>
      <form
        className=" w-full flex flex-col justify-start gap-6"
        onSubmit={handleFormSubmit}
      >
        <div className="flex flex-col justify-start gap-2 w-full">
          <div className="flex justify-between">
            <label className="text-p text-sm font-semibold" htmlFor="email">
              Enter your e-mail address
            </label>
          </div>
          <AccountingInput
            type={"email"}
            name={"email"}
            id={"email"}
            placeholder={"Enter your e-mail address..."}
            onChange={handleInputChange}
            value={values.email}
          />
        </div>
        <input
          className="button1 bg-blue rounded-lg py-3 text-lg font-semibold mb-6 hover:bg-lblue duration-300"
          type="submit"
          value="Send Instructions"
        />
      </form>
    </AccountingModal>
  );
};
export default ForgotPassword;
