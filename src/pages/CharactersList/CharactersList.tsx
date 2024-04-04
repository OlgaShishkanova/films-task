import React from "react";
import { useQuery } from "@tanstack/react-query";
import { ListGroup } from "react-bootstrap";
import Loader from "@/shared/Loader";
import CharactersListItem from "./components/CharactersListItem";
import { allCharactersOptions } from "@/queries/queriesOptions";

// When the list here is even longer or each item takes more space, then we can use an "infinite scroll" here.
// https://tanstack.com/query/latest/docs/framework/react/guides/infinite-queries

const CharactersList: React.FC = () => {
  const { data, isLoading } = useQuery(allCharactersOptions());

  return (
    <>
      <h2>Star Wars Characters</h2>
      {data ? (
        <ListGroup as="ol" numbered className="mt-4">
          {data.allPeople?.edges?.map((edge) => {
            const node = edge?.node;
            return node ? (
              <CharactersListItem character={node} key={edge.cursor} />
            ) : null;
          })}
        </ListGroup>
      ) : (
        <>{isLoading ? <Loader /> : <div>No characters</div>}</>
      )}
    </>
  );
};

export default CharactersList;
