import { Outlet } from "react-router-dom";
import { Header } from "..";

const HomeLayout = () => {
  return (
    <div className="bg-s">
      <Header />
      <Outlet />
    </div>
  );
};
export default HomeLayout;
