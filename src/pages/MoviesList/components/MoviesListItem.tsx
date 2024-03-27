import React from "react";
import { Badge, ListGroup } from "react-bootstrap";
import { FragmentType, useFragment } from "../../../gql";
import { FilmFragment } from "../../../graphqlSchemas/graphqlSchemas";

interface Props {
  film: FragmentType<typeof FilmFragment>;
}

const MoviesListItem: React.FC<Props> = (props) => {
  const film = useFragment(FilmFragment, props.film);
  return (
    <ListGroup.Item
      className="d-flex justify-content-between align-items-start"
      action
      href={`/movie/${film.id}`}
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{film.title}</div>
        <div className="my-2 fst-italic">Director: {film.director}</div>
        {film.openingCrawl}
      </div>
      <Badge bg="secondary" text="primary" pill>
        {film.releaseDate}
      </Badge>
    </ListGroup.Item>
  );
};

export default MoviesListItem;
