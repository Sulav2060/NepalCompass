import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Airport from "./pages/Airport";
import NotFound from "./pages/NotFound";
import PageTemplate from "./pages/PageTemplate";
import Trekking from "./pages/TrekkingHiking";
import SafetyHealth from "./pages/SafetyHealth";
import NatureWildlife from "./pages/NatureWildlife";
import WelcomePage from "./pages/Welcome";
import FoodAndDrink from "./pages/FoodAndDrink";
import AdventureAndSports from "./pages/AdventureAndSports";
import Shopping from "./pages/Shopping";
import CulturalExperiences from "./pages/CulturalExperiences";
import Accommodation from "./pages/Accommodation";
import Transportation from "./pages/Transportation";

function App() {
  return (
    ///ContentComponent changes based on the current route. So, when the route changes, the ContentComponent changes, but the component itself doesn't re-render.
    //This is why the page needs to be refreshed to see the changes.
    //pagetemplate vitra rerender garna parchha
    <Router>
      <div>
        <Routes>
          <Route path="" element={<WelcomePage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/arriving" element={<Airport />} />
          <Route path="/trekking" element={<Trekking />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/safety_health" element={<SafetyHealth />} />
          <Route path="/nature_wildlife" element={<NatureWildlife />} />
          <Route path="/transportation" element={<Transportation />} />
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
