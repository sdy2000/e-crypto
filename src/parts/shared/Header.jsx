import { FiSearch } from "react-icons/fi";
import { IconButton, ThemeButton } from "../../components";
import { BsList } from "react-icons/bs";
// import { useEffect, useState } from "react";

const Header = () => {
  // const [isOpenList, setIsOpenList] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     if (window.innerWidth >= 1024) {
  //       setIsOpenList(false);
  //     }
  //   });
  // }, []);

  // function OpenList() {
  //   isOpenList === true ? setIsOpenList(false) : setIsOpenList(true);
  // }

  return (
    <>
      <header className="bg-p py-3">
        <nav className="container flex justify-between">
          <div className="flex justify-start items-center">
            <img className="w-20 h-12" src="/assets/e-icon.png" alt="E icon" />
            <span className="text-p text-3xl font-bold -ml-4">Crypto</span>
          </div>
          <div className="flex justify-center items-center gap-3 ">
            <IconButton value={<FiSearch />} />
            <ThemeButton />
            <IconButton value={<BsList />} />
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
