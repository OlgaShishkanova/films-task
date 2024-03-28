import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./shared/MainLayout";
import Home from "./pages/Home/Home";
import MoviesList from "./pages/MoviesList/MoviesList";
import Movie from "./pages/Movie/Movie";
import Character from "./pages/Character/Character";

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
        <Route
          path="/movie/:id"
          element={
            <MainLayout>
              <Movie />
            </MainLayout>
          }
        />
        <Route
          path="/character/:id"
          element={
            <MainLayout>
              <Character />
            </MainLayout>
          }
        />
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
