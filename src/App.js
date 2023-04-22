import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeLayout } from "./parts";
import { Home } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
