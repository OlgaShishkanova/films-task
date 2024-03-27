import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import request from "graphql-request";
import { oneFilmQueryDocument } from "../../graphqlSchemas/graphqlSchemas";
import Loader from "../../shared/Loader";
import { getYear } from "../../helpers/helpers";
import { Card } from "react-bootstrap";
import CharactersList from "./CharactersList";

const Movie: React.FC = () => {
  const params = useParams();
  const id = params.id;
  const { data, isLoading } = useQuery({
    queryKey: ["one-film", id],
    queryFn: async () => {
      return request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        oneFilmQueryDocument,
        { id }
      );
    },
    enabled: !!id,
  });

  if (!data && !isLoading) {
    return <div>No Such Film</div>;
  }
  if (isLoading) {
    return <Loader />;
  }
  if (data && data.film) {
    const film = data.film;
    const characters = film.characterConnection?.characters;
    return (
      <>
        <Card bg="dark" text="light" border="secondary" className="mb-2">
          <Card.Body>
            <Card.Title>
              {film.title} ({getYear(film.releaseDate)})
            </Card.Title>
            <Card.Subtitle className="mb-2">by {film.director}</Card.Subtitle>
          </Card.Body>
        </Card>
        <Card bg="dark" text="light" border="secondary" className="mb-2">
          <Card.Body>
            <Card.Subtitle className="mb-2">Description</Card.Subtitle>
            <Card.Text>{film.openingCrawl}</Card.Text>
          </Card.Body>
        </Card>
        <Card bg="dark" text="light" border="secondary" className="mb-2">
          <Card.Body>
            <Card.Subtitle className="mb-2">Producers</Card.Subtitle>
            {film.producers?.map((producer) => {
              return <Card.Text key={producer}>{producer}</Card.Text>;
            })}
          </Card.Body>
        </Card>
        <Card bg="dark" text="light" border="secondary" className="mb-2">
          <Card.Body>
            {characters ? <CharactersList characters={characters} /> : null}
          </Card.Body>
        </Card>
      </>
    );
  }
  return null;
};

export default Movie;
