import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Airport from "./pages/Airport";
import NotFound from "./pages/NotFound";
import PageTemplate from "./pages/PageTemplate";
import Trekking from "./pages/TrekkingHiking";
import SafetyHealth from "./pages/SafetyHealth";
import NatureWildlife from "./pages/NatureWildlife";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="" element={<Airport />} />
          <Route path="/arriving" element={<Airport />} />
          <Route path="/trekking" element={<Trekking />} />
          <Route path="/safety_health" element={<SafetyHealth />} />
          <Route path="/nature_wildlife" element={<NatureWildlife />} />
          <Route path="/pagetemplate" element={<PageTemplate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
