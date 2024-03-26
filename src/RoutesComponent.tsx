import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./shared/MainLayout";
import Home from "./pages/Home/Home";

const RoutesComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* <Route
          path="/words-list"
          element={
            <MainLayout>
              <WordsList />
            </MainLayout>
          }
        />
        <Route
          path="/categories-list"
          element={
            <MainLayout>
              <CategoriesList />
            </MainLayout>
          }
        /> */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
};
export default RoutesComponent;
