import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import PageTemplate from "./pages/PageTemplate";
import PageContent from "./PageContent";

const routes = [
  { path: "/", pagekey: "Airport"},
  { path: "/arriving/*", pagekey: "Airport"},
  {
    path: "/trekking/*",
    pagekey: "Trekking",

  },
  {
    path: "/safety_health/*",
    pagekey: "SafetyHealth",
  
  },
  {
    path: "/nature_wildlife/*",
    pagekey: "NatureWildlife",
   
  },
];
function App() {
  return (
    <Router>
      <div>
        <Suspense>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  <PageTemplate
                    contentComponent={<PageContent pagekey={route.pagekey} />}
                    navTitle={route.pagekey}
                  />
                }
              />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
