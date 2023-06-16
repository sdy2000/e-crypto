export const BASE_URL = "https://api.coingecko.com/api/v3/";

// ! Global
export const CurrencyInfo = () => `${BASE_URL}global`;

// ! Search
export const SearchCoin = (text) => `${BASE_URL}search?query=${text}`;
