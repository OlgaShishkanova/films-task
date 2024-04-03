/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment FilmItem on Film {\n    id\n    title\n    releaseDate\n    director\n  }\n": types.FilmItemFragmentDoc,
    "\n  query allFilmsQuery {\n    allFilms {\n      edges {\n        node {\n          openingCrawl\n          ...FilmItem\n        }\n        cursor\n      }\n    }\n  }\n": types.AllFilmsQueryDocument,
    "\n  fragment CharacterItem on Person {\n    id\n    name\n    birthYear\n    gender\n    hairColor\n    height\n    homeworld {\n      name\n    }\n    species {\n      name\n    }\n    eyeColor\n  }\n": types.CharacterItemFragmentDoc,
    "\n  fragment CharacterSmallItem on Person {\n    birthYear\n    id\n    name\n  }\n": types.CharacterSmallItemFragmentDoc,
    "\n  query allCharactersQuery {\n    allPeople {\n      edges {\n        node {\n          ...CharacterSmallItem\n        }\n        cursor\n      }\n    }\n  }\n": types.AllCharactersQueryDocument,
    "\n  query oneFilmQuery($id: ID) {\n    film(id: $id) {\n      id\n      director\n      producers\n      releaseDate\n      title\n      openingCrawl\n      characterConnection {\n        characters {\n          ...CharacterItem\n        }\n      }\n    }\n  }\n": types.OneFilmQueryDocument,
    "\n  query oneCharacterQuery($id: ID) {\n    person(id: $id) {\n      ...CharacterItem\n      filmConnection {\n        films {\n          ...FilmItem\n        }\n      }\n    }\n  }\n": types.OneCharacterQueryDocument,
    "\n  query allFilmsWithVariablesQuery($first: Int!) {\n    allFilms(first: $first) {\n      edges {\n        node {\n          title\n          director\n          releaseDate\n          speciesConnection {\n            species {\n              name\n              classification\n              homeworld {\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.AllFilmsWithVariablesQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment FilmItem on Film {\n    id\n    title\n    releaseDate\n    director\n  }\n"): (typeof documents)["\n  fragment FilmItem on Film {\n    id\n    title\n    releaseDate\n    director\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query allFilmsQuery {\n    allFilms {\n      edges {\n        node {\n          openingCrawl\n          ...FilmItem\n        }\n        cursor\n      }\n    }\n  }\n"): (typeof documents)["\n  query allFilmsQuery {\n    allFilms {\n      edges {\n        node {\n          openingCrawl\n          ...FilmItem\n        }\n        cursor\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CharacterItem on Person {\n    id\n    name\n    birthYear\n    gender\n    hairColor\n    height\n    homeworld {\n      name\n    }\n    species {\n      name\n    }\n    eyeColor\n  }\n"): (typeof documents)["\n  fragment CharacterItem on Person {\n    id\n    name\n    birthYear\n    gender\n    hairColor\n    height\n    homeworld {\n      name\n    }\n    species {\n      name\n    }\n    eyeColor\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CharacterSmallItem on Person {\n    birthYear\n    id\n    name\n  }\n"): (typeof documents)["\n  fragment CharacterSmallItem on Person {\n    birthYear\n    id\n    name\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query allCharactersQuery {\n    allPeople {\n      edges {\n        node {\n          ...CharacterSmallItem\n        }\n        cursor\n      }\n    }\n  }\n"): (typeof documents)["\n  query allCharactersQuery {\n    allPeople {\n      edges {\n        node {\n          ...CharacterSmallItem\n        }\n        cursor\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query oneFilmQuery($id: ID) {\n    film(id: $id) {\n      id\n      director\n      producers\n      releaseDate\n      title\n      openingCrawl\n      characterConnection {\n        characters {\n          ...CharacterItem\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query oneFilmQuery($id: ID) {\n    film(id: $id) {\n      id\n      director\n      producers\n      releaseDate\n      title\n      openingCrawl\n      characterConnection {\n        characters {\n          ...CharacterItem\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query oneCharacterQuery($id: ID) {\n    person(id: $id) {\n      ...CharacterItem\n      filmConnection {\n        films {\n          ...FilmItem\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query oneCharacterQuery($id: ID) {\n    person(id: $id) {\n      ...CharacterItem\n      filmConnection {\n        films {\n          ...FilmItem\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query allFilmsWithVariablesQuery($first: Int!) {\n    allFilms(first: $first) {\n      edges {\n        node {\n          title\n          director\n          releaseDate\n          speciesConnection {\n            species {\n              name\n              classification\n              homeworld {\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query allFilmsWithVariablesQuery($first: Int!) {\n    allFilms(first: $first) {\n      edges {\n        node {\n          title\n          director\n          releaseDate\n          speciesConnection {\n            species {\n              name\n              classification\n              homeworld {\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;