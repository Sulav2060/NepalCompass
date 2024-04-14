import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Airport from "./pages/Airport";
import NotFound from "./pages/NotFound";
import PageTemplate from "./pages/PageTemplate";
function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="" element={<Airport />} />
        <Route path="/airport" element={<Airport />} />

          <Route path="/pagetemplate" element={<PageTemplate />} />
          <Route path="*" element={<NotFound />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
