import { useEffect, useState } from "react";
import { CurrencyInfo } from "../../services/api/apiFromCoinGeko";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const CoinsTablePagination = ({ props }) => {
  const [coinsCount, setCoinsCount] = useState([]);

  useEffect(() => {
    axios
      .get(CurrencyInfo())
      .then((data) => {
        setCoinsCount(data.data.data.active_cryptocurrencies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const pageCount = Math.ceil(coinsCount / props.perPage);
  const handlePageClick = (e) => {
    props.setPage(e.selected);
  };
  console.log(props.page + 1);
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <span>
            <BsChevronRight />
          </span>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount || 10}
        previousLabel={
          <span>
            <BsChevronLeft />
          </span>
        }
        containerClassName="flex justify-center items-center gap-1 text-p font-bold"
        pageClassName="block border-solid hover:bg-t w-10 h-10 flex justify-center items-center rounded-lg duration-300"
        activeClassName="bg-blue text-dfp"
      />
      <span className="flex justify-center items-center gap-3 text-p duration-300"></span>
    </>
  );
};
export default CoinsTablePagination;
