import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeLayout } from "./parts";
import { CoinPage, Home } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:id" element={<CoinPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
