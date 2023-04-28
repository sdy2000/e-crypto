import { IoMdClose } from "react-icons/io";
import { IconButton } from "..";
import { useForm } from "../../store";

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
          <div className="px-8 w-full flex flex-col"></div>
        </div>
      </div>
    </div>
  );
};
export default CurrencyModal;
