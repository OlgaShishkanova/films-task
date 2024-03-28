import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import request from "graphql-request";
import { oneCharacterQueryDocument } from "../../graphqlSchemas/graphqlSchemas";
import Loader from "../../shared/Loader";
import CharacterInfo from "./components/CharacterInfo";
import CharacterFilms from "./components/CharacterFilms";

const Character: React.FC = () => {
  const params = useParams();
  const id = params.id;
  const { data, isLoading } = useQuery({
    queryKey: ["one-character", id],
    queryFn: async () => {
      return request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        oneCharacterQueryDocument,
        { id }
      );
    },
    enabled: !!id,
  });

  if (!data && !isLoading) {
    return <div>No Such Character</div>;
  }
  if (isLoading) {
    return <Loader />;
  }
  if (data && data.person) {
    const films = data.person.filmConnection?.films;
    return (
      <>
        <CharacterInfo character={data.person} />
        {films ? <CharacterFilms films={films} /> : null}
      </>
    );
  }
  return null;
};

export default Character;
