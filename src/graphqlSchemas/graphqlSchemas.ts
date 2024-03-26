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
