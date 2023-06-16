import { AiFillPieChart, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { barList } from "../../data/static/barList";
import { SearchInputBox } from "..";

const XLNavbar = () => {
  return (
    <nav className="w-full hidden xl:flex justify-between py-3">
      <div className="flex justify-start items-center gap-4">
        <div className="flex justify-start items-center gap-1">
          <img
            className="w-8 h-8 md:w-10 md:h-10"
            src="/assets/img/e-icon.png"
            alt="E icon"
          />
          <span className="text-p text-xl md:text-2xl font-bold">Crypto</span>
        </div>
        <ul className="header-bar">
          {barList.map((nav) => (
            <li key={nav.slug}>
              <Link to={nav.slug} title={nav.bar_name}>
                {nav.bar_name}
              </Link>
            </li>
          ))}
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
        <SearchInputBox />
      </div>
    </nav>
  );
};
export default XLNavbar;
