import { useEffect, useState } from "react";
import { IconButton, ThemeButton } from "../../components";
import { FiSearch } from "react-icons/fi";
import { BsList } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HeaderHiddenBar } from "..";

const Header = () => {
  const [isOpenList, setIsOpenList] = useState(false);

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
              src="/assets/e-icon.png"
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
        <div className="container py-1">
          <ul className="cyp-info-table">
            <li>
              Cryptos: <Link to="">23562</Link>
              Exchanges: <Link to="">619</Link>
              Market Cap: <Link to=""> $1,163,832,895,285</Link>
              24h Vol: <Link to="">$30,201,677,427</Link>
              Dominance: <Link to="">BTC: 45.9% ETH: 19.3%</Link>
            </li>
          </ul>
        </div>
        <HeaderHiddenBar
          isOpenList={isOpenList}
          setIsOpenList={setIsOpenList}
        />
      </header>
    </>
  );
};
export default Header;
