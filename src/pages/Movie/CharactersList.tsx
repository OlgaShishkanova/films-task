import React from "react";
import { Badge, ListGroup } from "react-bootstrap";
import { FragmentType, useFragment } from "../../gql";
import { CharacterFragment } from "../../graphqlSchemas/graphqlSchemas";

interface Props {
  characters: Array<FragmentType<typeof CharacterFragment> | null>;
}

const CharactersList: React.FC<Props> = (props) => {
  const characters = useFragment(
    CharacterFragment,
    props.characters as Array<FragmentType<typeof CharacterFragment>>
  );
  console.log({ characters });
  return (
    <ListGroup>
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
                <div className="d-flex justify-content-between">
                  <ListGroup className="character__feature">
                    <ListGroup.Item>
                      <b>Gender:</b> {character.gender}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <b>Height:</b> {character.height}
                    </ListGroup.Item>
                  </ListGroup>
                  <ListGroup className="character__feature">
                    <ListGroup.Item>
                      <b>Eye Color:</b> {character.eyeColor}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <b>Hair Color:</b> {character.hairColor}
                    </ListGroup.Item>
                  </ListGroup>
                  <ListGroup className="character__feature">
                    <ListGroup.Item>
                      <b>Home World:</b> {character.homeworld?.name}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <b>Species Name:</b> {character.species?.name}
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
