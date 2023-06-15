import { BiSearch } from "react-icons/bi";
import { useForm } from "../../store";
import axios from "axios";
import { SearchCoin } from "../../services/api/apiFromCoinGeko";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const getSearchInputModel = () => ({
  text: "",
});

const SearchInput = () => {
  const { values, handleInputChange } = useForm(getSearchInputModel);
  const [searchData, setSearchData] = useState();
  const [onFocus, setOnFocus] = useState(false);
  const searchInput = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearchChange = (e) => {
    if (e.target.value.length >= 3) {
      axios
        .get(SearchCoin(e.target.value))
        .then((data) => {
          setSearchData(data.data.coins.slice(0, 6));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="relative">
      <form
        onSubmit={handleFormSubmit}
        className={`${
          onFocus && searchData
            ? " w-96 border-b dark:border-lft"
            : "rounded-xl w-auto"
        } flex justify-center items-center px-3 py-1 bg-t shadow-lg h-12`}
      >
        <button type="submit">
          <BiSearch className="text-lfs" size={28} />
        </button>
        <input
          className="bg-t w-full h-full placeholder:text-lfs ml-1 outline-none text-p"
          type="text"
          id="text"
          name="text"
          placeholder="Search"
          ref={searchInput}
          onFocus={() => {
            setOnFocus(true);
          }}
          onBlur={() => {
            setOnFocus(false);
          }}
          onChange={(e) => {
            handleInputChange(e);
            handleSearchChange(e);
          }}
          value={values.text}
        />
      </form>
      {onFocus && searchData && (
        <div className="absolute top-12 left-0 bg-t w-96 shadow-lg">
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
                    <span className="market-cap">#{coin.market_cap_rank}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default SearchInput;
