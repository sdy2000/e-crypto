import CoinsTBodyTable from "../../components/table/CoinsTBodyTable";

const CoinsTable = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-12 bg-s py-12">
      <table className="coins-table">
        <thead className="sticky -top-1 bg-s">
          <tr>
            <th> </th>
            <th className="hidden md:table-cell t-center ml-4">#</th>
            <th className="t-left">Name</th>
            <th className="t-right">Price</th>
            <th className="t-right">24h %</th>
            <th className="t-right">Market Cap</th>
            <th className="t-right">Volume(24h)</th>
            <th className="t-right">Circulating Supply</th>
          </tr>
        </thead>
        <CoinsTBodyTable />
      </table>
    </div>
  );
};
export default CoinsTable;
