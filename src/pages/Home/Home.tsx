import React from "react";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Container className="p-5">
        <div className="home__info">
          <div className="d-flex align-items-center justify-content-between">
            <h1 className="me-2">Welcome to Star Wars Wiki</h1>
            <Image
              width={100}
              src="https://media.tenor.com/ONv6f0zBNFYAAAAj/hugging-grogu.gif"
            />
          </div>
          <p>
            Star Wars is an American epic space opera media franchise created by
            George Lucas, which began with the eponymous 1977 film and quickly
            became a worldwide pop culture phenomenon. The franchise has been
            expanded into various films and other media, including television
            series, video games, novels, comic books, theme park attractions,
            and themed areas, comprising an all-encompassing fictional universe.
            Star Wars is one of the highest-grossing media franchises of all
            time.
          </p>
          <p>Prepare to learn much more about Star Wars!</p>
          <div>
            <hr />
            <h3>Check out our awesome content</h3>
            <ul className="home__links">
              <li>
                <Link to="/movies-list">Star Wars Movies</Link>
              </li>
              <li>
                <Link to="/characters">Characters</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
