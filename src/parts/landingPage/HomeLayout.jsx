import { Outlet } from "react-router-dom";
import { Header } from "..";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default HomeLayout;
