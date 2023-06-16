const CoinsBannerLoader = () => {
  return (
    <div className="w-44 px-6">
      <div className="animate-pulse flex flex-col justify-center items-center">
        <div className="rounded-full bg-slate-700 h-12 w-12"></div>
        <div className="py-1">
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
    </div>
  );
};
export default CoinsBannerLoader;
