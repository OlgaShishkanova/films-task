import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { FragmentType } from "@/gql";
import { FilmFragment } from "@/graphqlSchemas/graphqlSchemas";
import MoviesListItem from "@/shared/MovieItem";

interface Props {
  films: Array<FragmentType<typeof FilmFragment> | null>;
}

const CharacterFilms: React.FC<Props> = ({ films }) => {
  return (
    <Card className="custom-card--dark mb-2">
      <Card.Body>
        <Card.Subtitle className="mb-2">Appeared in Movies</Card.Subtitle>
        <ListGroup>
          {films.map((film) => {
            return film ? <MoviesListItem film={film} /> : null;
          })}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default CharacterFilms;
