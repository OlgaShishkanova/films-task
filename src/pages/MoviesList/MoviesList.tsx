import React from "react";
import { allFilmsQueryDocument } from "../../graphqlSchemas/graphqlSchemas";
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { ListGroup } from "react-bootstrap";
import MoviesListItem from "./components/MoviesListItem";
import Loader from "../../shared/Loader";

const MoviesList: React.FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["films"],
    queryFn: async () => {
      return request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        allFilmsQueryDocument
      );
    },
  });

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
