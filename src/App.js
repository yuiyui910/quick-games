import { Top } from "./features/top";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { GomokuEx } from "./features/games/gomokuEx";

function App() {
  return (
    <BrowserRouter basename="/quick-games">
      <Routes>
        <Route path="/" element={<Top />} />
        {/* ここにパスを追加していく */}
        <Route path="/gomokuEx" element={<GomokuEx />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
