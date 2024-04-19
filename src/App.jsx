import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Airport from "./pages/Airport";
import NotFound from "./pages/NotFound";
import PageTemplate from "./pages/PageTemplate";
import Trekking from "./pages/TrekkingHiking";
import SafetyHealth from "./pages/SafetyHealth";
import NatureWildlife from "./pages/NatureWildlife";

function App() {
  return (
    ///ContentComponent changes based on the current route. So, when the route changes, the ContentComponent changes, but the component itself doesn't re-render.
    //This is why the page needs to be refreshed to see the changes.
    //pagetemplate vitra rerender garna parchha
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <PageTemplate
                contentComponent={<Airport />}
                navigationItems={Airport.navigationItems}
              />
            }
          />
          <Route
            path="/arriving"
            element={
              <PageTemplate
                contentComponent={<Airport />}
                navigationItems={Airport.navigationItems}
              />
            }
          />
          <Route
            path="/trekking"
            element={
              <PageTemplate
                contentComponent={<Trekking />}
                navigationItems={Trekking.navigationItems}
              />
            }
          />
          <Route
            path="/safety_health"
            element={
              <PageTemplate
                contentComponent={<SafetyHealth />}
                navigationItems={SafetyHealth.navigationItems}
              />
            }
          />
          <Route
            path="/nature_wildlife"
            element={
              <PageTemplate
                contentComponent={<NatureWildlife />}
                navigationItems={NatureWildlife.navigationItems}
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
