import { Home } from "./components/pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/quick-games">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* ここにパスを追加していく */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
