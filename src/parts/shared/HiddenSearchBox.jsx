import { IoMdClose } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { useForm } from "../../store";
import { useRef, useState } from "react";
import axios from "axios";
import { SearchCoin } from "../../services/api/apiFromCoinGeko";
import { Link } from "react-router-dom";

const getSearchInputModel = () => ({
  text: "",
});

const HiddenSearchBox = ({ isVisibleSearchBox, setIsVisibleSearchBox }) => {
  const { values, handleInputChange } = useForm(getSearchInputModel);
  const [searchData, setSearchData] = useState();
  const searchInput = useRef();

  const handleSearchChange = (e) => {
    if (e.target.value.length >= 3) {
      axios
        .get(SearchCoin(e.target.value))
        .then((data) => {
          setSearchData(data.data.coins.slice(0, 12));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const resetInputHandel = () => {
    searchInput.current.value = "";
    searchInput.current.focus();
    setSearchData();
  };

  return (
    <>
      <div
        className={`hidden-nav fixed inset-0 bg-lbp dark:bg-dbp pb-5 overflow-auto
                     overscroll-contain z-30 xl:hidden
                     ${
                       !isVisibleSearchBox
                         ? "-translate-x-[100%] invisible"
                         : "translate-x-[0] visible"
                     }`}
      >
        <div className="sticky inset-0 bg-p pt-4 z-40 mx-4 sm:mx-12 md:mx-20 lg:mx-28">
          <div
            className={`${
              searchData ? "border-b dark:border-lft" : "rounded-xl w-full"
            } flex justify-center items-center px-3 py-1 bg-t shadow-lg h-12`}
          >
            <button onClick={handleSearchChange}>
              <BiSearch className="text-lfs" size={28} />
            </button>
            <input
              className="bg-t w-full h-full placeholder:text-lfs ml-1 outline-none text-p"
              type="text"
              id="text"
              name="text"
              placeholder="Search"
              ref={searchInput}
              onChange={(e) => {
                handleInputChange(e);
                handleSearchChange(e);
              }}
              value={values.text}
            />
            <button className="bg-s text-s p-1 rounded-full">
              <IoMdClose
                onClick={resetInputHandel}
                className="text-lfs"
                size={28}
              />
            </button>
            <button
              onClick={() => setIsVisibleSearchBox(false)}
              className="px-5 py-1 rounded-2xl shadow-lg bg-p hover:bg-s text-s mx-3"
            >
              Cancel
            </button>
          </div>
          {searchData && (
            <div className="bg-t w-full shadow-lg">
              <ul className="search-data-list">
                {searchData?.map((coin) => (
                  <li key={coin.id}>
                    <Link to={`/coin/${coin.id}`}>
                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-4">
                          <img src={coin.thumb} alt={coin.name} />
                          <span className="name">{coin.name}</span>
                          <span className="symbol">{coin.symbol}</span>
                        </div>
                        <span className="market-cap">
                          #{coin.market_cap_rank}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default HiddenSearchBox;
