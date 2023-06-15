import { useState } from "react";
import { CoinsTBodyTable, CoinsTablePagination } from "../../components";

const CoinsTable = () => {
  const [perPage, setPerPage] = useState(100);
  const [page, setPage] = useState(1);
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-12 bg-s py-12">
        <table className="coins-table">
          <thead className="sticky bg-s -top-1 bg-s">
            <tr>
              <th> </th>
              <th className="t-center ml-1 md:ml-4">#</th>
              <th className="t-left">Name</th>
              <th className="t-right">Price</th>
              <th className="t-right hidden xs:table-cell">24h %</th>
              <th className="t-right hidden md:table-cell">Market Cap</th>
              <th className="t-right hidden lg:table-cell">Volume(24h)</th>
              <th className="t-right hidden xl:table-cell">
                Circulating Supply
              </th>
            </tr>
          </thead>
          <CoinsTBodyTable props={{ perPage, page }} />
        </table>
      </div>
      <CoinsTablePagination props={{ perPage, setPerPage, page, setPage }} />
    </>
  );
};
export default CoinsTable;
