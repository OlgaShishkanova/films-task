import React from "react";
import { Card, ListGroup, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getYear } from "@/helpers/helpers";

interface Props {
  films: Array<Film | null>;
}
interface Film {
  title?: string | null;
  director?: string | null;
  releaseDate?: string | null;
  id: string;
}

const CharacterFilms: React.FC<Props> = ({ films }) => {
  return (
    <Card className="custom-card--dark mb-2">
      <Card.Body>
        <Card.Subtitle className="mb-2">Appeared in Movies</Card.Subtitle>
        <ListGroup>
          {films.map((film) => {
            return (
              <Link
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
                to={`/movie/${film?.id}`}
                key={film?.id}
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{film?.title}</div>
                  <div className="my-2 fst-italic">
                    Director: {film?.director}
                  </div>
                </div>
                <Badge bg="secondary" text="primary" pill>
                  {getYear(film?.releaseDate)}
                </Badge>
              </Link>
            );
          })}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default CharacterFilms;
