import { IoMdClose } from "react-icons/io";
import { CurrencySelectorTable, IconButton } from "..";
import { useForm, useStateContext } from "../../store";
import { currency } from "../../services/static/currencyData";

const searchBox = () => ({
  searchBox: "",
});

const CurrencyModal = ({ onClose }) => {
  const { setContext } = useStateContext();
  const { values, handleInputChange } = useForm(searchBox);

  const handleCurrencyChange = (currency, symbol, currency_image) => {
    setContext({
      currency: currency,
      symbol: symbol,
      currency_image: currency_image,
    });

    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-[2px]
        flex justify-center items-center z-50"
    >
      <div className="w-full md:w-[90%] lg:w-[80%] max-w-5xl h-[80vh] scroll-smooth overflow-y-scroll scrollbar-hide rounded-3xl">
        <div className="flex flex-col justify-center p-4 bg-p w-full">
          <div className="fixed top-[5.75rem] w-[95%] md:w-[85%] lg:w-[75%] max-w-[62rem] h-32 mx-auto bg-p pt-6">
            <div className="flex justify-between items-center p-1 pb-5 border-b sm:border-none dark:border-lfp">
              <h2 className="text-p text-xl md:text-2xl font-bold ml-4">
                Select Currency
              </h2>
              <span>
                <IconButton
                  value={
                    <IoMdClose
                      onClick={() => {
                        onClose();
                      }}
                      size={50}
                    />
                  }
                />
              </span>
            </div>
            <div className="sm:px-5 w-full">
              <input
                className="outline-none bg-t placeholder:text-s w-full h-12 rounded-xl shadow-lg px-6 hover:border border-blue"
                type="text"
                placeholder="Search"
                value={values.searchBox}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="px-2 xs:px-8 w-full flex flex-col gap-8 mt-40">
            <CurrencySelectorTable
              handleCurrencyChange={handleCurrencyChange}
              currency={currency
                .sort(function (a, b) {
                  return b.popular - a.popular;
                })
                .slice(0, 6)}
              title="Popular currencies"
            />
            <CurrencySelectorTable
              handleCurrencyChange={handleCurrencyChange}
              currency={currency.filter((c) => c.type === "Fiat")}
              title="Fiat currencies"
            />
            <CurrencySelectorTable
              handleCurrencyChange={handleCurrencyChange}
              currency={currency.filter((c) => c.type === "Crypto")}
              title="Cryptocurrencies"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrencyModal;
