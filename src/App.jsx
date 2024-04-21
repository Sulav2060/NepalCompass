import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Airport = React.lazy(() => import("./pages/Airport"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const PageTemplate = React.lazy(() => import("./pages/PageTemplate"));
const Trekking = React.lazy(() => import("./pages/TrekkingHiking"));
const SafetyHealth = React.lazy(() => import("./pages/SafetyHealth"));
const NatureWildlife = React.lazy(() => import("./pages/NatureWildlife"));

function App() {
  return (
    <Router>
      <div>
      <Suspense>
        {/* used suspense to stop preload of components */}
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
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
