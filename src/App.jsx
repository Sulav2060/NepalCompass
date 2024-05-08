import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import PageTemplate from "./pages/PageTemplate";
import PageContent from "./PageContent";
import { message } from "antd";

const cities = ["ktm", "pkr"];

const routes = [
  { path: "", pagekey: "Airport" },
  { path: "arriving", pagekey: "Airport" },
  { path: "Accommodation", pagekey: "Accommodation" },
  { path: "food_and_drink", pagekey: "FoodAndDrink" },
  { path: "transportation", pagekey: "Transportation" },
  { path: "trekking", pagekey: "Trekking" },
  { path: "adventure_sports", pagekey: "AdventureSports" },
  { path: "cultural_experiences", pagekey: "CulturalExperiences" },
  { path: "nature_wildlife", pagekey: "NatureWildlife" },
  { path: "shopping", pagekey: "Shopping" },
  { path: "safety_health", pagekey: "SafetyHealth" },
  { path: "money_matters", pagekey: "MoneyMatters" },
  { path: "etiquette_customs", pagekey: "EtiquetteCustoms" },
  { path: "language_communication", pagekey: "LanguageCommunication" },
  { path: "travel_tips", pagekey: "TravelTips" },
];
function App() {
  return (
    <Router>
      {/* {message.info(`Currently in ${routes.pagekey}`) } */}

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
