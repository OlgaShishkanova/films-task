import React from "react";
import { Badge, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FragmentType, useFragment } from "@/gql";
import { CharacterFragment } from "@/graphqlSchemas/graphqlSchemas";
import CharacterFeatures from "@/shared/CharacterFeatures";

interface Props {
  characters: Array<FragmentType<typeof CharacterFragment> | null>;
}

const CharactersList: React.FC<Props> = (props) => {
  const characters = useFragment(
    CharacterFragment,
    props.characters as Array<FragmentType<typeof CharacterFragment>>
  );
  return (
    <ListGroup className="character__list-group">
      {characters.map((character) => {
        return (
          <Link
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
            to={`/character/${character.id}`}
            key={character.id}
          >
            <div className="ms-2 me-auto w-100">
              <div className="fw-bold">{character.name}</div>
              <div className="my-2 fst-italic">
                <CharacterFeatures character={character} />
              </div>
            </div>
            <Badge
              bg="secondary"
              text="primary"
              pill
              className="badge--absolute"
            >
              Birth: {character.birthYear}
            </Badge>
          </Link>
        );
      })}
    </ListGroup>
  );
};

export default CharactersList;
