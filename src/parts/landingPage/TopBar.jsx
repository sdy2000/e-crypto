import WaterWave from "react-water-wave";

const TopBar = () => {
  return (
    <div className="w-full h-60 lg:h-72 hidden md:inline-block">
      <WaterWave
        imageUrl={"./assets/img/banner2.jpg"}
        style={{ width: "100%", height: "100%", backgroundSize: "cover" }}
      >
        {() => (
          <div className="container flex flex-col justify-center items-center gap-3 py-10">
            <h1 className="text-dfp text-2xl lg:text-3xl font-extrabold">
              <span className="text-silver text-3xl lg:text-4xl -rotate-45">
                E
              </span>{" "}
              Crypto
            </h1>
            <h3 className="text-dft text-sm">
              Get All The Info Regarding Your Favorite Crypto Currency
            </h3>
          </div>
        )}
      </WaterWave>
    </div>
  );
};
export default TopBar;
