import ThemeButton from "../buttons/ThemeButton";
import { FiSearch } from "react-icons/fi";
import { BsList } from "react-icons/bs";
import { IconButton } from "../../../../../components";
import useWindowWidthListener from "../../hooks/useWindowWidthListener";
import { useState } from "react";
import { HiddenSearchBox } from "..";
import { HeaderHiddenBar } from "../../..";

const SMNavbar = () => {
  const { isOpenList, setIsOpenList } = useWindowWidthListener();
  const [isVisibleSearchBox, setIsVisibleSearchBox] = useState(false);

  return (
    <>
      <nav className="w-full flex justify-between border-b  dark:border-das pb-3 xl:hidden">
        <div className="flex justify-start items-center gap-1">
          <img
            className="w-8 h-8 md:w-10 md:h-10"
            src="/assets/img/e-icon.png"
            alt="E-Crypto icon"
          />
          <span className="text-p text-xl md:text-2xl font-bold">Crypto</span>
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

      <HeaderHiddenBar isOpenList={isOpenList} setIsOpenList={setIsOpenList} />

      {isVisibleSearchBox && (
        <HiddenSearchBox
          isVisibleSearchBox={isVisibleSearchBox}
          setIsVisibleSearchBox={setIsVisibleSearchBox}
        />
      )}
    </>
  );
};
export default SMNavbar;
