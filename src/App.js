import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeLayout } from "./parts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
