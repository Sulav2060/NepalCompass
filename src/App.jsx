import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import PageTemplate from "./pages/PageTemplate";
import PageContent from "./PageContent";

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
                contentComponent={<PageContent pagekey="Airport" />}
                navTitle="Airport"
              />
            }
          />
          <Route
            path="/arriving/*"
            element={
              <PageTemplate
                contentComponent={<PageContent pagekey="Airport" />}
                navTitle="Airport"
              />
            }
          />
          <Route
            path="/trekking/*"
            element={
              <PageTemplate
                contentComponent={<PageContent pagekey="Trekking" />}
                navTitle="Trekking"
              />
            }
          />
          <Route
            path="/safety_health/*"
            element={
              <PageTemplate
                contentComponent={<PageContent pagekey="SafetyHealth" />}
                navTitle="SafetyHealth"
              />
            }
          />
          <Route
            path="/nature_wildlife/*"
            element={
              <PageTemplate
                contentComponent={<PageContent pagekey="NatureWildlife" />}
                navTitle="NatureWildlife"
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
