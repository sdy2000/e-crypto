import { AiOutlineStar } from "react-icons/ai";

const CoinsTableLoader = () => {
  return (
    <tr className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto px-6">
      <td>
        <button
          className="hover:text-gold hover:scale-110 duration-300"
          title="Add to Main Watchlist and Follow Coin"
          disabled
        >
          <AiOutlineStar size={22} />
        </button>
      </td>
      <td colSpan={7}>
        <div className="animate-pulse flex space-x-4 px-6 items-center">
          <div className="rounded-full bg-slate-700 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};
export default CoinsTableLoader;
