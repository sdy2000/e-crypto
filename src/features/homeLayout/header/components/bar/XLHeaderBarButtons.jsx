import { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useStateContext } from "../../../../../hooks";
import { AccountHeadBtn, CurrencyModal, ThemeButton } from "..";
import { ForgotPassword, Login, SingUp } from "../../../../../pages";

const XLHeaderBarButtons = () => {
  const { context } = useStateContext();

  const [isVisibleLoginBox, setIsVisibleLoginBox] = useState(false);
  const [isVisibleSignUpBox, setIsVisibleSignUpBox] = useState(false);
  const [isVisibleForgotPassBox, setIsVisibleForgotPassBox] = useState(false);

  const [isVisibleCurrency, setIsVisibleCurrency] = useState(false);

  return (
    <>
      <div className="hidden xl:flex justify-between items-center w-[45%]">
        <div className="flex justify-center items-center gap-3 border-r dark:border-das">
          <button
            onClick={() => {
              setIsVisibleCurrency(true);
            }}
            className="flex justify-center items-center gap-1 text-p text-sm font-semibold w-20"
          >
            <img
              className="w-5 h-5 rounded-full"
              src={context.currency_image}
              alt={context.currency}
            />
            <span className="text-sm font-bold text-p">{context.currency}</span>
            <AiOutlineCaretDown />
          </button>
          <ThemeButton size={23} />
        </div>
        <div className="flex justify-center items-center gap-3 w-full ml-3">
          <AccountHeadBtn
            onClick={() => {
              setIsVisibleLoginBox(true);
            }}
            value="Log in"
            styles="text-blue hover:text-lblue border-2 border-blue hover:border-lblue dark:hover:bg-lfp "
          />
          <AccountHeadBtn
            onClick={() => {
              setIsVisibleSignUpBox(true);
            }}
            to={"#"}
            value="Sign up"
            styles="bg-blue hover:bg-lblue"
          />
        </div>
      </div>

      {isVisibleLoginBox && (
        <Login
          onClose={() => setIsVisibleLoginBox(false)}
          onOpen={() => setIsVisibleSignUpBox(true)}
          openForgot={() => setIsVisibleForgotPassBox(true)}
        />
      )}
      {isVisibleSignUpBox && (
        <SingUp
          onClose={() => setIsVisibleSignUpBox(false)}
          onOpen={() => setIsVisibleLoginBox(true)}
        />
      )}
      {isVisibleForgotPassBox && (
        <ForgotPassword
          onClose={() => setIsVisibleForgotPassBox(false)}
          openLogin={() => setIsVisibleLoginBox(true)}
          openSingUp={() => setIsVisibleSignUpBox(true)}
        />
      )}
      {isVisibleCurrency && (
        <CurrencyModal onClose={() => setIsVisibleCurrency(false)} />
      )}
    </>
  );
};
export default XLHeaderBarButtons;
