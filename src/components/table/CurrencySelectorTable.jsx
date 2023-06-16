import { AiFillCheckCircle } from "react-icons/ai";
import { useStateContext } from "../../hooks";

const CurrencySelectorTable = ({ handleCurrencyChange, currency, title }) => {
  const { context } = useStateContext();

  return (
    <div className="flex flex-col justify-start gap-6">
      <h3 className="text-s font-semibold">{title}</h3>
      <ul className="flex flex-wrap justify-start gap-y-6 xs:gap-x-3">
        {currency.map((currency) => (
          <li
            onClick={() => {
              handleCurrencyChange(
                currency.id,
                currency.symbol,
                currency.image
              );
            }}
            key={currency.id}
            className="flex justify-start items-center gap-3 w-[50%] xs:w-[48%] md:w-[31%] lg:w-[22%] h-16 pl-3 rounded-2xl cursor-pointer hover:bg-t duration-300"
          >
            <img
              className="w-6 h-6 rounded-full"
              src={currency.image}
              alt={currency.currency_name}
            />
            <div className="flex flex-col gap-1 text-xs xs:text-sm">
              <span className="text-p font-semibold">
                {currency.currency_name}
              </span>
              <div className="flex justify-between items-center">
                <span className="text-s ">
                  {currency.id} - {currency.symbol}
                </span>
                {context.currency === currency.id ? (
                  <span className="text-emerald-600">
                    <AiFillCheckCircle size={25} />
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CurrencySelectorTable;
