import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { AiOutlineCaretDown } from "react-icons/ai";
import { HiCurrencyDollar } from "react-icons/hi";
import { Link } from "react-router-dom";
import {
  CurrencyModal,
  CustomButton1,
  CustomButton2,
  IconButton,
  SocialBox,
  ThemeButton,
} from "../../components";
import { headerData } from "../../services/fake/fakeData";
import { Login, SingUp, ForgotPassword } from "../../pages";
import { useStateContext } from "../../store";

const categores = headerData;

const HeaderHiddenBar = ({ isOpenList, setIsOpenList }) => {
  const { context } = useStateContext();
  const [clickStates, setClickStates] = useState({});

  const [isVisibleLoginBox, setIsVisibleLoginBox] = useState(false);
  const [isVisibleSignUpBox, setIsVisibleSignUpBox] = useState(false);
  const [isVisibleForgotPassBox, setIsVisibleForgotPassBox] = useState(false);

  const [isVisibleCurrency, setIsVisibleCurrency] = useState(false);

  const handleOnClick = (id) => {
    if (clickStates[id] === true) {
      setClickStates({
        [id]: false,
      });
    } else {
      setClickStates({
        [id]: true,
      });
    }
  };

  return (
    <>
      <nav
        className={`hidden-nav fixed inset-0 bg-lbp dark:bg-dbp pb-5 overflow-auto
                     overscroll-contain z-30 xl:hidden
                     ${
                       !isOpenList
                         ? "-translate-x-[100%] invisible"
                         : "translate-x-[0] visible"
                     }`}
      >
        <div className="sticky w-full inset-0 bg-p pt-4 z-40">
          <div className="container flex justify-between border-b shadow-xl dark:border-das pb-5">
            <div className="flex justify-start items-center gap-1">
              <img
                className="w-8 h-8 md:w-10 md:h-10"
                src="/assets/img/e-icon.png"
                alt="E icon"
              />
              <span className="text-p text-xl md:text-2xl font-bold">
                Crypto
              </span>
            </div>
            <IconButton
              value={
                <IoMdClose
                  size={40}
                  onClick={() => setIsOpenList(!isOpenList)}
                />
              }
            />
          </div>
        </div>

        <div className="container flex flex-col">
          <ul className="hidden-bar flex flex-col justify-center items-start gap-2 text-lfp dark:text-dfp">
            {categores.map((cat) => (
              <li
                className="ease-in-out duration-300"
                onClick={() => handleOnClick(cat.id)}
                key={cat.id}
                id={cat.id}
              >
                <Link to="#">
                  <div className="flex justify-center items-center gap-3">
                    {cat.img && (
                      <img
                        className="w-7 h-7 rounded-full shadow-md"
                        src={cat.img}
                        alt={cat.category}
                      />
                    )}
                    {cat.category}
                  </div>
                  {cat.subCategores && <BsChevronDown />}
                </Link>
                {cat.subCategores && (
                  <ul
                    className={`hidden-sub-bar ${
                      !clickStates[cat.id]
                        ? "translate-y-[100%] hidden"
                        : "translate-y-[0] visible"
                    }`}
                  >
                    {cat.subCategores.map((subCat, idx) => (
                      <li key={idx}>
                        <Link to="/#">
                          {subCat.img && (
                            <img
                              className="w-7 h-7 rounded-full shadow-md"
                              src={subCat.img}
                              alt={subCat.category}
                            />
                          )}

                          {subCat.category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="flex flex-col md:flex-row gap-3 px-3 my-8">
            <CustomButton1
              onClick={() => {
                setIsVisibleSignUpBox(true);
              }}
              to={"#"}
              value="Create an account"
              styles="bg-blue hover:bg-lblue"
            />
            <CustomButton1
              onClick={() => {
                setIsVisibleLoginBox(true);
              }}
              value="Log in"
              styles="bg-t hover:bg-las text-lfp dark:text-gray-200 dark:hover:bg-lfp"
            />
          </div>
          <div className="flex justify-center items-center gap-3 px-4">
            <CustomButton2
              to={"#"}
              value="English"
              icon2={<AiOutlineCaretDown />}
            />
            <CustomButton2
              to={"#"}
              onClick={() => {
                setIsVisibleCurrency(true);
              }}
              value={context.currency}
              icon1={<HiCurrencyDollar size={20} className="text-green-500" />}
              icon2={<AiOutlineCaretDown />}
            />
            <CustomButton2
              to={"#"}
              value={<ThemeButton size={20} />}
              styles="w-auto py-[2px]"
            />
          </div>
          <div className="mt-12 border-b dark:border-das pb-8 w-full">
            <ul className="flex justify-center items-center gap-2 flex-wrap max-w-xs text-s text-sm font-semibold mx-auto ">
              <li>
                <Link to="#">Desclaimer</Link>
              </li>
              <li>.</li>
              <li>
                <Link to="#">Request From</Link>
              </li>
              <li>.</li>
              <li>
                <Link to="#">Terms of Use</Link>
              </li>
              <li>
                <Link to="#">Privacy</Link>
              </li>
              <li>.</li>
              <li>
                <Link to="#">About</Link>
              </li>
            </ul>
          </div>
          <div className="mt-12 w-full">
            <SocialBox styles={"hidden-bar-social"} />
          </div>
        </div>
      </nav>

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
export default HeaderHiddenBar;
