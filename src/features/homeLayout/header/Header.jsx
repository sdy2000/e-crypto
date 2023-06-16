import { useEffect, useState } from "react";
import {
  CurrencyInfoTable,
  CurrencyModal,
  CustomButton1,
  IconButton,
  SearchInput,
  ThemeButton,
} from "../../../components";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BsList } from "react-icons/bs";
import { AiFillPieChart, AiFillStar, AiOutlineCaretDown } from "react-icons/ai";
import { HiddenSearchBox } from "../../shared";
import { HeaderHiddenBar } from "../";
import { Login, SingUp, ForgotPassword } from "../../../pages";
import { useStateContext } from "../../../hooks";

const Header = () => {
  const { context } = useStateContext();

  const [isOpenList, setIsOpenList] = useState(false);

  const [isVisibleLoginBox, setIsVisibleLoginBox] = useState(false);
  const [isVisibleSignUpBox, setIsVisibleSignUpBox] = useState(false);
  const [isVisibleForgotPassBox, setIsVisibleForgotPassBox] = useState(false);
  const [isVisibleSearchBox, setIsVisibleSearchBox] = useState(false);

  const [isVisibleCurrency, setIsVisibleCurrency] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        setIsOpenList(false);
      }
    });
  }, []);

  return (
    <>
      <div className="bg-p">
        <header className="max-w-[1440px] mx-auto px-12 bg-p py-3">
          <nav className="w-full flex justify-between border-b  dark:border-das pb-3 xl:hidden">
            <div className="flex justify-start items-center gap-1">
              <img
                className="w-8 h-8 md:w-10 md:h-10"
                src="/assets/img/e-icon.png"
                alt="E-Crypto icon"
              />
              <span className="text-p text-xl md:text-2xl font-bold">
                Crypto
              </span>
            </div>
            <div className="flex justify-center items-center gap-1 ">
              <IconButton
                value={
                  <FiSearch
                    onClick={() => {
                      setIsVisibleSearchBox(!isVisibleSearchBox);
                    }}
                  />
                }
              />
              <ThemeButton />
              <IconButton
                value={
                  <BsList
                    onClick={() => {
                      setIsOpenList(!isOpenList);
                    }}
                  />
                }
              />
            </div>
          </nav>
          <div className="w-full py-1 xl:pb-5 xl:border-b dark:border-das flex justify-center items-center">
            <CurrencyInfoTable />
            <div className="hidden xl:flex justify-between items-center w-[45%]">
              <div className="flex justify-center items-center gap-3 border-r dark:border-das">
                <button className="flex justify-center items-center gap-1 text-p text-sm font-semibold">
                  English
                  <AiOutlineCaretDown />
                </button>
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
                  <span className="text-sm font-bold text-p">
                    {context.currency}
                  </span>
                  <AiOutlineCaretDown />
                </button>
                <ThemeButton size={23} />
              </div>
              <div className="flex justify-center items-center gap-3 w-full ml-3">
                <CustomButton1
                  onClick={() => {
                    setIsVisibleLoginBox(true);
                  }}
                  value="Log in"
                  styles="text-blue hover:text-lblue border-2 border-blue hover:border-lblue dark:hover:bg-lfp "
                />
                <CustomButton1
                  onClick={() => {
                    setIsVisibleSignUpBox(true);
                  }}
                  to={"#"}
                  value="Sign up"
                  styles="bg-blue hover:bg-lblue"
                />
              </div>
            </div>
          </div>
          <nav className="w-full hidden xl:flex justify-between py-3">
            <div className="flex justify-start items-center gap-4">
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
              <ul className="header-bar">
                <li>
                  <Link to="#">Cryptocurrencies</Link>
                </li>
                <li>
                  <Link to="#">Exchanges</Link>
                </li>
                <li>
                  <Link to="#">Community</Link>
                </li>
                <li>
                  <Link to="#">Products</Link>
                </li>
                <li>
                  <Link to="#">Learn</Link>
                </li>
              </ul>
            </div>
            <div className="flex justify-center items-center gap-5 ">
              <div className="flex justify-center items-center gap-3">
                <button className="flex justify-center items-center gap-1 text-t hover:text-blue duration-300">
                  <AiFillStar size={25} />
                  Watchlist
                </button>
                <button className="flex justify-center items-center gap-1 text-t hover:text-blue duration-300">
                  <AiFillPieChart size={25} />
                  Protfolio
                </button>
              </div>
              <SearchInput />
            </div>
          </nav>
          <HeaderHiddenBar
            isOpenList={isOpenList}
            setIsOpenList={setIsOpenList}
          />

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
          {isVisibleSearchBox && (
            <HiddenSearchBox
              isVisibleSearchBox={isVisibleSearchBox}
              setIsVisibleSearchBox={setIsVisibleSearchBox}
            />
          )}
        </header>
      </div>
    </>
  );
};
export default Header;