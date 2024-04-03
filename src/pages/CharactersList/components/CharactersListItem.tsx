import React from "react";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FragmentType, useFragment } from "@/gql";
import { CharacterSmallFragment } from "@/graphqlSchemas/graphqlSchemas";

interface Props {
  character: FragmentType<typeof CharacterSmallFragment>;
}

const CharactersListItem: React.FC<Props> = (props) => {
  const character = useFragment(CharacterSmallFragment, props.character);
  return (
    <Link
      className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
      to={`/character/${character.id}`}
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{character.name}</div>
      </div>
      <Badge bg="secondary" text="primary" pill>
        Birth: {character.birthYear}
      </Badge>
    </Link>
  );
};

export default CharactersListItem;
