import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import Loader from "@/shared/Loader";
import { getYear } from "@/helpers/helpers";
import { oneMovieOptions } from "@/queries/queriesOptions";
import CharactersList from "./components/CharactersList";

const Movie: React.FC = () => {
  const params = useParams();
  const id = params.id;
  const { data, isLoading } = useQuery(oneMovieOptions(id));

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
        <Card className="custom-card--dark mb-2">
          <Card.Body>
            <Card.Title>
              {film.title} ({getYear(film.releaseDate)})
            </Card.Title>
            <Card.Subtitle className="mb-2">by {film.director}</Card.Subtitle>
          </Card.Body>
        </Card>
        <Card className="custom-card--dark mb-2">
          <Card.Body>
            <Card.Subtitle className="mb-2">Description</Card.Subtitle>
            <Card.Text>{film.openingCrawl}</Card.Text>
          </Card.Body>
        </Card>
        <Card className="custom-card--dark mb-2">
          <Card.Body>
            <Card.Subtitle className="mb-2">Producers</Card.Subtitle>
            {film.producers?.map((producer) => {
              return <Card.Text key={producer}>{producer}</Card.Text>;
            })}
          </Card.Body>
        </Card>
        <Card className="custom-card--dark mb-2">
          <Card.Body>
            <Card.Subtitle className="mb-2">Characters</Card.Subtitle>
            {characters ? <CharactersList characters={characters} /> : null}
          </Card.Body>
        </Card>
      </>
    );
  }
  return null;
};

export default Movie;
