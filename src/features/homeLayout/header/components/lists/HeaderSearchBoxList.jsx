import { Link } from "react-router-dom";

const HeaderSearchBoxList = ({ searchData }) => {
  return (
    <div className="absolute top-12 left-0 bg-t w-96 shadow-lg z-10">
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
export default HeaderSearchBoxList;
