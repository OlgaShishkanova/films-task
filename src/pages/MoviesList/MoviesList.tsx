import React from "react";
import { allFilmsQueryDocument } from "../../graphqlSchemas/graphqlSchemas";
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { ListGroup } from "react-bootstrap";
import MoviesListItem from "./components/MoviesListItem";

const MoviesList: React.FC = () => {
  const { data } = useQuery({
    queryKey: ["films"],
    queryFn: async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        allFilmsQueryDocument
      ),
  });

  return (
    <div>
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
        <div>No films</div>
      )}
    </div>
  );
};

export default MoviesList;
