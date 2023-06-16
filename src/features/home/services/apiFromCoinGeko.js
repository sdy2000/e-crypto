export const BASE_URL = "https://api.coingecko.com/api/v3/";

export const TrendingCoins = (currency) =>
  `${BASE_URL}coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
