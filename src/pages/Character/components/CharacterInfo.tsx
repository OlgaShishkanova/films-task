import React from "react";
import { FragmentType, useFragment } from "../../../gql";
import { CharacterFragment } from "../../../graphqlSchemas/graphqlSchemas";
import { Card, ListGroup, Badge } from "react-bootstrap";
import { CharacterFeaturesTitle, NotApplicable } from "../../../types/enums";

interface Props {
  character: FragmentType<typeof CharacterFragment>;
}

const CharacterInfo: React.FC<Props> = (props) => {
  const character = useFragment(CharacterFragment, props.character);
  const personFeatures = [
    {
      title: CharacterFeaturesTitle.Gender,
      value: character.gender,
    },
    {
      title: CharacterFeaturesTitle.Height,
      value: character.height,
    },
    {
      title: CharacterFeaturesTitle.EyeColor,
      value: character.eyeColor,
    },
    {
      title: CharacterFeaturesTitle.HairColor,
      value: character.hairColor,
    },
    {
      title: CharacterFeaturesTitle.HomeWorld,
      value: character.homeworld?.name,
    },
    {
      title: CharacterFeaturesTitle.SpeciesName,
      value: character.species?.name,
    },
  ];
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
          <ListGroup>
            {personFeatures.map((feature) => {
              return (
                <ListGroup.Item>
                  <b>{feature.title}:</b> {feature.value || NotApplicable.NA}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default CharacterInfo;
