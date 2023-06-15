import { IoMdClose } from "react-icons/io";
import { IconButton } from "..";
import { useForm } from "../../store";
import { currency } from "../../services/static/currencyData";

const searchBox = () => ({
  searchBox: "",
});

const CurrencyModal = ({ onClose }) => {
  const { values, handleInputChange } = useForm(searchBox);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-[2px]
        flex justify-center items-center z-50"
    >
      <div className="w-full md:w-[90%] lg:w-[80%] max-w-5xl">
        <div className="flex flex-col justify-center p-4 bg-p w-full rounded-3xl">
          <div className="mb-6">
            <div className="flex justify-between items-center p-1 pb-5 mb-5 pd:mb-10 border-b sm:border-none dark:border-lfp">
              <h2 className="text-p text-xl md:text-2xl font-bold">
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
          <div className="px-8 w-full flex flex-col mt-12">
            <div className="flex flex-col justify-start gap-6">
              <h3 className="text-s font-semibold">Fiat currencies</h3>
              <ul className="flex flex-wrap justify-center gap-y-6 gap-x-3">
                {currency
                  .filter((c) => c.type === "Fiat")
                  .map((currency) => (
                    <li
                      key={currency.id}
                      className="flex justify-start items-center gap-3 w-52 h-16 pl-3 rounded-2xl cursor-pointer hover:bg-t duration-300"
                    >
                      <img
                        className="w-5 h-5 rounded-full"
                        src={currency.image}
                        alt={currency.currency_name}
                      />
                      <div className="flex flex-col gap-1">
                        <span className="text-p font-semibold">
                          {currency.currency_name}
                        </span>
                        <span className="text-s">
                          {currency.id} - {currency.symbol}
                        </span>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrencyModal;
