import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./shared/MainLayout";
import Home from "./pages/Home/Home";
import MoviesList from "./pages/MoviesList/MoviesList";

const RoutesComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/movies-list"
          element={
            <MainLayout>
              <MoviesList />
            </MainLayout>
          }
        />
        {/* <Route
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
