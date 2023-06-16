import { SMNavbar, XLHeaderBarButtons, XLNavbar } from "./components";
import { CurrencyInfoBar } from "./components";

const Header = () => {
  return (
    <>
      <div className="bg-p">
        <header className="max-w-[1440px] mx-auto px-12 bg-p py-3">
          <SMNavbar />
          <div className="w-full py-1 xl:pb-5 xl:border-b dark:border-das flex justify-center items-center">
            <CurrencyInfoBar />
            <XLHeaderBarButtons />
          </div>
          <XLNavbar />
        </header>
      </div>
    </>
  );
};
export default Header;
