import { graphql } from "../gql/gql";

export const FilmFragment = graphql(`
  fragment FilmItem on Film {
    id
    title
    releaseDate
    openingCrawl
    director
  }
`);

export const allFilmsQueryDocument = graphql(`
  query allFilmsQuery {
    allFilms {
      edges {
        node {
          ...FilmItem
        }
        cursor
      }
    }
  }
`);

export const CharacterFragment = graphql(`
  fragment CharacterItem on Person {
    id
    name
    birthYear
    gender
    hairColor
    height
    homeworld {
      name
    }
    species {
      name
      language
      id
    }
    eyeColor
  }
`);

export const oneFilmQueryDocument = graphql(`
  query oneFilmQuery($id: ID) {
    film(id: $id) {
      id
      director
      producers
      releaseDate
      title
      openingCrawl
      characterConnection {
        characters {
          ...CharacterItem
        }
      }
    }
  }
`);
