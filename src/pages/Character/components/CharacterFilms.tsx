import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { FragmentType } from "@/gql";
import { FilmFragment } from "@/graphqlSchemas/graphqlSchemas";
import MovieItem from "@/shared/MovieItem";
import { FilmItemFragment } from "@/gql/graphql";

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
            return film ? (
              <MovieItem film={film} key={(film as FilmItemFragment).id} />
            ) : null;
          })}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default CharacterFilms;
