import React from "react";
import { Badge, ListGroup } from "react-bootstrap";
import { FragmentType, useFragment } from "../../../gql";
import { CharacterFragment } from "../../../graphqlSchemas/graphqlSchemas";
import { CharacterFeaturesTitle } from "../../../types/enums";

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
          <ListGroup.Item
            className="d-flex justify-content-between align-items-start"
            action
            href={`/character/${character.id}`}
            key={character.id}
          >
            <div className="ms-2 me-auto w-100">
              <div className="fw-bold">{character.name}</div>
              <div className="my-2 fst-italic">
                <div className="d-flex justify-content-between flex-wrap">
                  <ListGroup className="character__feature">
                    <ListGroup.Item>
                      <b>{CharacterFeaturesTitle.Gender}:</b> {character.gender}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <b>{CharacterFeaturesTitle.Height}:</b> {character.height}
                    </ListGroup.Item>
                  </ListGroup>
                  <ListGroup className="character__feature">
                    <ListGroup.Item>
                      <b>{CharacterFeaturesTitle.EyeColor}:</b>{" "}
                      {character.eyeColor}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <b>{CharacterFeaturesTitle.HairColor}:</b>{" "}
                      {character.hairColor}
                    </ListGroup.Item>
                  </ListGroup>
                  <ListGroup className="character__feature">
                    <ListGroup.Item>
                      <b>{CharacterFeaturesTitle.HomeWorld}:</b>{" "}
                      {character.homeworld?.name}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <b>{CharacterFeaturesTitle.SpeciesName}:</b>{" "}
                      {character.species?.name || "N/A"}
                    </ListGroup.Item>
                  </ListGroup>
                </div>
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
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default CharactersList;
