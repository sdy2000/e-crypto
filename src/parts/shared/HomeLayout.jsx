import { Outlet } from "react-router-dom";
import { Footer, Header } from "..";

const HomeLayout = () => {
  return (
    <div className="bg-s">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default HomeLayout;
