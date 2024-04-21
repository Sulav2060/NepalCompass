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
          <Route
            path="/"
            element={
              <PageTemplate
                contentComponent={<Airport />}
                navTitle="Airport"
                // navigationItems={Airport.navigationItems}
                // passing the navigationItems as a prop to the PageTemplate component requires manual refresh of PageTemplate component when the route changes.
              />
            }
          />
          <Route
            path="/arriving/*"
            element={
              <PageTemplate
                contentComponent={<Airport />}
                navTitle="Airport"
                // navigationItems={Airport.navigationItems}
              />
            }
          />
          <Route
            path="/trekking/*"
            element={
              <PageTemplate
                contentComponent={<Trekking />}
                navTitle="Trekking"
                // navigationItems={Trekking.navigationItems}
              />
            }
          />
          <Route
            path="/safety_health/*"
            element={
              <PageTemplate
                contentComponent={<SafetyHealth />}
                navTitle="SafetyHealth"
                // navigationItems={SafetyHealth.navigationItems}
              />
            }
          />
          <Route
            path="/nature_wildlife/*"
            element={
              <PageTemplate
                contentComponent={<NatureWildlife />}
                navTitle="NatureWildlife" 
                // navigationItems={NatureWildlife.navigationItems}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
