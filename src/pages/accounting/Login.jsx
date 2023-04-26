import { AccountingModal } from "../../components";

const Login = ({ onClose }) => {
  return (
    <AccountingModal onClose={onClose}>
      <form className=" w-full">
        <div className="account-form flex flex-col justify-start gap-2 w-full">
          <div className="flex justify-between">
            <label className="text-p text-sm font-semibold" htmlFor="email">
              Email Address
            </label>
          </div>
          <input
            className="bg-s h-14 py-1 px-4 rounded-xl shadow-lg border border:dft dark:border-lft placeholder-lft dark:placeholder-dft outline-none focus:outline-4 focus:outline-blue hover:border-blue dark:hover:border-blue duration-300"
            type="email"
            name="email"
            placeholder="Enter your email address..."
          />
        </div>
      </form>
    </AccountingModal>
  );
};
export default Login;
