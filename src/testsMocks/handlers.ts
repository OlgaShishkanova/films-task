import { graphql, HttpResponse } from "msw";

const edges = [
  {
    node: {
      title: "A New Hope",
      director: "George Lucas",
      releaseDate: "1977-05-25",
      id: "ZmlsbXM6MQ==",
      created: "2014-12-10T14:23:31.880000Z",
      openingCrawl: "It is a period of civil war.",
    },
    cursor: "YXJyYXljb25uZWN0aW9uOjA=",
  },
  {
    node: {
      title: "The Empire Strikes Back",
      director: "Irvin Kershner",
      releaseDate: "1980-05-17",
      id: "ZmlsbXM6Mg==",
      created: "2014-12-12T14:23:31.880000Z",
      openingCrawl: "It is a dark time...",
    },
    cursor: "YXJyYXljb25uZWN0aW9uOjE=",
  },
];

const handlers = [
  graphql.query("allFilmsQueryDocument", () => {
    return HttpResponse.json({
      data: {
        allFilms: {
          edges,
        },
      },
    });
  }),
];

export default handlers;
