import { queryOptions } from "@tanstack/react-query";
import request from "graphql-request";
import {
  allCharactersQueryDocument,
  allFilmsQueryDocument,
  oneCharacterQueryDocument,
  oneFilmQueryDocument,
} from "@/graphqlSchemas/graphqlSchemas";
import { ApiQuery } from "@/types/enums";

const API_URL = "https://swapi-graphql.netlify.app/.netlify/functions/index";

export const allMoviesOptions = () => {
  return queryOptions({
    queryKey: [ApiQuery.MoviesAll],
    queryFn: async () => {
      return request(API_URL, allFilmsQueryDocument);
    },
  });
};

export const allCharactersOptions = () => {
  return queryOptions({
    queryKey: [ApiQuery.CharactersAll],
    queryFn: async () => {
      return request(API_URL, allCharactersQueryDocument);
    },
  });
};


export const oneMovieOptions = (id?: string) => {
  return queryOptions({
    queryKey: [ApiQuery.OneMovie, id],
    queryFn: async () => {
      return request(API_URL, oneFilmQueryDocument, { id });
    },
    enabled: !!id,
  });
};

export const oneCharacterOptions = (id?: string) => {
  return queryOptions({
    queryKey: [ApiQuery.OneCharacter, id],
    queryFn: async () => {
      return request(API_URL, oneCharacterQueryDocument, { id });
    },
    enabled: !!id,
  });
};
