import { Outlet } from "react-router-dom";
import { Footer, Header } from "../features/homeLayout";

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
