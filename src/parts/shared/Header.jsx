import { useEffect, useState } from "react";
import { CustomButton1, IconButton, ThemeButton } from "../../components";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BsList } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiFillPieChart, AiFillStar, AiOutlineCaretDown } from "react-icons/ai";
import { HiCurrencyDollar } from "react-icons/hi";
import { HeaderHiddenBar } from "..";
import { Login, SingUp, ForgotPassword } from "../../pages";

const Header = () => {
  const [isOpenList, setIsOpenList] = useState(false);
  const [isVisibleLoginBox, setIsVisibleLoginBox] = useState(false);
  const [isVisibleSignUpBox, setIsVisibleSignUpBox] = useState(false);
  const [isVisibleForgotPassBox, setIsVisibleForgotPassBox] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        setIsOpenList(false);
      }
    });
  }, []);

  return (
    <>
      <header className="bg-p py-3">
        <nav className="container flex justify-between border-b  dark:border-das pb-3 xl:hidden">
          <div className="flex justify-start items-center gap-1">
            <img
              className="w-8 h-8 md:w-10 md:h-10"
              src="./assets/img/e-icon.png"
              alt="E icon"
            />
            <span className="text-p text-xl md:text-2xl font-bold">Crypto</span>
          </div>
          <div className="flex justify-center items-center gap-1 ">
            <IconButton value={<FiSearch />} />
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
        <div className="container py-1 xl:pb-5 xl:border-b dark:border-das flex justify-center items-center">
          <ul className="cyp-info-table">
            <li>
              Cryptos: <Link to="">23562</Link>
              Exchanges: <Link to="">619</Link>
              Market Cap: <Link to=""> $1,163,832,895,285</Link>
              24h Vol: <Link to="">$30,201,677,427</Link>
              Dominance: <Link to="">BTC: 45.9% ETH: 19.3%</Link>
            </li>
          </ul>
          <div className="hidden xl:flex justify-between items-center w-[45%]">
            <div className="flex justify-center items-center gap-3 border-r dark:border-das">
              <span className="flex justify-center items-center gap-1 text-p text-sm font-semibold">
                English
                <AiOutlineCaretDown />
              </span>
              <span className="flex justify-center items-center gap-1 text-p text-sm font-semibold">
                <HiCurrencyDollar
                  size={20}
                  className="text-green-500 bg-white rounded-full"
                />
                USD
                <AiOutlineCaretDown />
              </span>
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
        <nav className="container hidden xl:flex justify-between py-3">
          <div className="flex justify-start items-center gap-4">
            <div className="flex justify-start items-center gap-1">
              <img
                className="w-8 h-8 md:w-10 md:h-10"
                src="./assets/img/e-icon.png"
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
            <div className="flex justify-center items-center px-3 py-1 bg-t rounded-xl shadow-lg h-12">
              <BiSearch className="text-lfs" size={28} />
              <input
                className="bg-t w-full h-full placeholder:text-lfs ml-1"
                type="text"
                placeholder="Search"
              />
            </div>
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
      </header>
    </>
  );
};
export default Header;
