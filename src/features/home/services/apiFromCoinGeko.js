export const BASE_URL = "https://api.coingecko.com/api/v3/";

// ! Coin
export const TrendingCoins = (currency) =>
  `${BASE_URL}coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

export const CoinList = (currency, perPage = 100, page = 1) =>
  `${BASE_URL}coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false`;

// ! Global
export const CurrencyInfo = () => `${BASE_URL}global`;
