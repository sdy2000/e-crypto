export const BASE_URL = "https://api.coingecko.com/api/v3/";

// ! Coin
export const CoinList = (currency, perPage = 100, page = 1) =>
  `${BASE_URL}coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false`;

export const SingleCoin = (id) => `${BASE_URL}coins/${id}`;

export const HistoricalChart = (id, days = 365, currency) =>
  `${BASE_URL}coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const TrendingCoins = (currency) =>
  `${BASE_URL}coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

// ! Global
export const CurrencyInfo = () => `${BASE_URL}global`;

// ! Search
export const SearchCoin = (text) => `${BASE_URL}search?query=${text}`;
