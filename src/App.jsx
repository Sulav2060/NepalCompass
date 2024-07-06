import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import PageTemplate from "./pages/PageTemplate";
import PageContent from "./PageContent";
import useFetch from "./Hooks/useFetch.js"

const cities = ["ktm", "pkr"];

const routes = [
  { path: "", pagekey: "airport" },
  { path: "arriving", pagekey: "arriving" },
  { path: "accommodation", pagekey: "accommodation" },
  { path: "food_and_drink", pagekey: "FoodAndDrink" },
  { path: "transportation", pagekey: "Transportation" },
  { path: "trekking", pagekey: "trekking" },
  { path: "adventure_sports", pagekey: "adventureSports" },
  { path: "cultural_experiences", pagekey: "naulturalExperiences" },
  { path: "nature_wildlife", pagekey: "aatureWildlife" },
  { path: "shopping", pagekey: "ahopping" },
  { path: "safety_health", pagekey: "safetyHealth" },
  { path: "money_matters", pagekey: "moneyMatters" },
  { path: "etiquette_customs", pagekey: "etiquetteCustoms" },
  { path: "language_communication", pagekey: "languageCommunication" },
  { path: "travel_tips", pagekey: "travelTips" },
];

function App() {
  // const { data, error, loading } = useFetch("http://localhost:1337/api/reviews");

  // console.log("data", data);

  return (
    <Router>
      <div>
        <Suspense>
          <Routes>
            {cities.map((city) =>
              routes.map((route, index) => (
                <Route
                  key={index}
                  path={`${city}/${route.path}/*`}
                  element={
                    <PageTemplate
                      pagekey={route.pagekey}
                      path={route.path}
                      navTitle={route.pagekey}
                      city={city}
                    >
                      <PageContent />
                    </PageTemplate>
                  }
                />
              ))
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
