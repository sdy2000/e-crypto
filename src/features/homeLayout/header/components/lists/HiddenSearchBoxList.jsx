import { Link } from "react-router-dom";

const HiddenSearchBoxList = ({ searchData }) => {
  return (
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
                <span className="market-cap">#{coin.market_cap_rank}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default HiddenSearchBoxList;
