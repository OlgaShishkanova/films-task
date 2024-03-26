import request from "graphql-request";
import { useQuery } from "@tanstack/react-query";
import { graphql } from "../gql/gql";

const allFilmsWithVariablesQueryDocument = graphql(`
  query allFilmsWithVariablesQuery($first: Int!) {
    allFilms(first: $first) {
      edges {
        node {
          title
          director
          releaseDate
          speciesConnection {
            species {
              name
              classification
              homeworld {
                name
              }
            }
          }
        }
      }
    }
  }
`);

export function TestPage1() {
  const { data } = useQuery({
    queryKey: ["test-films"],
    queryFn: async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        allFilmsWithVariablesQueryDocument,
        { first: 10 }
      ),
  });
  console.log({ data });
  return <div>Page 1 is here</div>;
}
