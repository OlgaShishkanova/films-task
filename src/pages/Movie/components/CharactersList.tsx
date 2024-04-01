import React from "react";
import { Badge, ListGroup } from "react-bootstrap";
import { FragmentType, useFragment } from "../../../gql";
import { CharacterFragment } from "../../../graphqlSchemas/graphqlSchemas";
import { CharacterFeaturesTitle, NotApplicable } from "../../../types/enums";
import CharacterFeatures from "../../../shared/CharacterFeatures";

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
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default CharactersList;
