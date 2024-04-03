import React from "react";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FragmentType, useFragment } from "@/gql";
import { FilmFragment } from "@/graphqlSchemas/graphqlSchemas";
import { getYear } from "@/helpers/helpers";

interface Props {
  film: FragmentType<typeof FilmFragment>;
  openingCrawl?: string | null;
}

const MovieItem: React.FC<Props> = (props) => {
  const film = useFragment(FilmFragment, props.film);
  return (
    <Link
      className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
      to={`/movie/${film.id}`}
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{film.title}</div>
        <div className="my-2 fst-italic">Director: {film.director}</div>
        {props.openingCrawl}
      </div>
      <Badge bg="secondary" text="primary" pill>
        {getYear(film.releaseDate)}
      </Badge>
    </Link>
  );
};

export default MovieItem;
