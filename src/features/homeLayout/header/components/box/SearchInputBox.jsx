import axios from "axios";
import { BiSearch } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { useRef, useState } from "react";
import { HeaderSearchBoxList } from "..";
import { SearchCoin } from "../../services/apiFromCoinGeko";
import { useForm } from "../../../../../hooks";

const getSearchInputModel = () => ({
  text: "",
});

const SearchInputBox = () => {
  const { values, handleInputChange } = useForm(getSearchInputModel);
  const [searchData, setSearchData] = useState();
  const [onFocus, setOnFocus] = useState(false);
  const [inputHover, setInputHover] = useState(false);
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

  const resetInputHandel = () => {
    searchInput.current.focus();
    searchInput.current.value = "";
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setInputHover(true)}
      onMouseLeave={() => setInputHover(false)}
      onFocus={() => {
        setOnFocus(true);
      }}
      onBlur={() => {
        if (!inputHover) setOnFocus(false);
      }}
    >
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
          onChange={(e) => {
            handleInputChange(e);
            handleSearchChange(e);
          }}
          value={values.text}
        />
        {onFocus && (
          <button>
            <IoMdClose
              onClick={resetInputHandel}
              className="text-lfs"
              size={28}
            />
          </button>
        )}
      </form>
      {onFocus && searchData && <HeaderSearchBoxList searchData={searchData} />}
    </div>
  );
};
export default SearchInputBox;
