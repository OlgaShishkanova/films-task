import React from "react";
import { ListGroup } from "react-bootstrap";
import { CharacterFeaturesTitle, NotApplicable } from "../types/enums";
import { CharacterItemFragment } from "../gql/graphql";

interface Props {
  character: CharacterItemFragment;
  isList?: boolean;
}

const CharacterFeatures: React.FC<Props> = ({ character, isList }) => {
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
    <ListGroup className={`character__features ${isList && "isList"}`}>
      {personFeatures.map((feature) => {
        return (
          <ListGroup.Item
            className="character__features-item"
            key={feature.title}
          >
            <b>{feature.title}:</b> {feature.value || NotApplicable.NA}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default CharacterFeatures;
