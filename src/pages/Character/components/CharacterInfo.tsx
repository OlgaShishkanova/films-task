import React from "react";
import { FragmentType, useFragment } from "../../../gql";
import { CharacterFragment } from "../../../graphqlSchemas/graphqlSchemas";
import { Card, Badge } from "react-bootstrap";
import CharacterFeatures from "../../../shared/CharacterFeatures";

interface Props {
  character: FragmentType<typeof CharacterFragment>;
}

const CharacterInfo: React.FC<Props> = (props) => {
  const character = useFragment(CharacterFragment, props.character);
  return (
    <>
      <Card className="custom-card--dark mb-2">
        <Card.Body className="d-flex align-items-center justify-content-between">
          <Card.Title className="mb-0">{character.name}</Card.Title>
          <Badge bg="secondary" text="primary" pill>
            Birth: {character.birthYear}
          </Badge>
        </Card.Body>
      </Card>
      <Card className="custom-card--dark mb-2">
        <Card.Body>
          <Card.Subtitle className="mb-2">Features</Card.Subtitle>
          <CharacterFeatures character={character} isList />
        </Card.Body>
      </Card>
    </>
  );
};

export default CharacterInfo;
