import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Airport from "./pages/Airport";
import NotFound from "./pages/NotFound";
import PageTemplate from "./pages/PageTemplate";
import Trekking from "./pages/TrekkingHiking";
import SafetyHealth from "./pages/SafetyHealth";
import NatureWildlife from "./pages/NatureWildlife";
<<<<<<< HEAD
=======
import WelcomePage from "./pages/Welcome";
import FoodAndDrink from "./pages/FoodAndDrink";
import AdventureAndSports from "./pages/AdventureAndSports";
import Shopping from "./pages/Shopping";
import CulturalExperiences from "./pages/CulturalExperiences";
import Accommodation from "./pages/Accommodation";
import Transportation from "./pages/Transportation";

>>>>>>> bb44a66fd3abf9576e2433bc5da751d73c91d40f
function App() {
  return (
    <Router>
      <div>
        <Routes>
<<<<<<< HEAD
          <Route path="" element={<Airport />} />
          <Route path="/arriving" element={<Airport />} />
          <Route path="/trekking" element={<Trekking />} />
          <Route path="/safety_health" element={<SafetyHealth />} />
          <Route path="/nature_wildlife" element={<NatureWildlife />} />
=======
          <Route path="" element={<WelcomePage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/arriving" element={<Airport />} />
          <Route path="/trekking" element={<Trekking />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/safety_health" element={<SafetyHealth />} />
          <Route path="/nature_wildlife" element={<NatureWildlife />} />
          <Route path="/transportation" element={<Transportation />} />
>>>>>>> bb44a66fd3abf9576e2433bc5da751d73c91d40f
          <Route path="/pagetemplate" element={<PageTemplate />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/foodanddrink" element={<FoodAndDrink />} />
          <Route path="/adventure_sports" element={<AdventureAndSports />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route
            path="/cultural_experiences"
            element={<CulturalExperiences />}
          />
          <Route path="/money_matters" element={<PageTemplate />} />
          <Route path="/etiquette_customs" element={<PageTemplate />} />
          <Route path="/language_communication" element={<PageTemplate />} />
          <Route path="/travel_tips" element={<PageTemplate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
