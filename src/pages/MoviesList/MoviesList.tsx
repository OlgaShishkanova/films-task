import React from "react";
import { useQuery } from "@tanstack/react-query";
import { ListGroup } from "react-bootstrap";
import Loader from "@/shared/Loader";
import { allMoviesOptions } from "@/queries/queriesOptions";
import MoviesListItem from "./components/MoviesListItem";

const MoviesList: React.FC = () => {
  const { data, isLoading } = useQuery(allMoviesOptions());

  return (
    <>
      <h2>Star Wars Movies List</h2>
      {data ? (
        <ListGroup as="ol" numbered>
          {data.allFilms?.edges?.map((edge) => {
            const node = edge?.node;
            return node ? (
              <MoviesListItem film={node} key={edge.cursor} />
            ) : null;
          })}
        </ListGroup>
      ) : (
        <>{isLoading ? <Loader /> : <div>No films</div>}</>
      )}
    </>
  );
};

export default MoviesList;
