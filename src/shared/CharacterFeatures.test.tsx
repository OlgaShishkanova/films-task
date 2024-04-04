import { screen, render } from "@testing-library/react";
import CharacterFeatures from "./CharacterFeatures";

describe("CharacterFeatures", () => {
  it("shows data when there is one", async () => {
    const character = {
      id: "1",
      gender: "Woman",
      height: 170,
      eyeColor: "Blue",
      hairColor: "Black",
      homeworld: {
        name: "Earth",
      },
      species: {
        name: "Human",
      },
    };
    render(<CharacterFeatures character={character} />);
    expect(screen.getByText(/Woman/i)).toBeInTheDocument();
    expect(screen.getByText(/Blue/i)).toBeInTheDocument();
    expect(screen.getByText(/Black/i)).toBeInTheDocument();
    expect(screen.getByText(/Earth/i)).toBeInTheDocument();
    expect(screen.getByText(/Human/i)).toBeInTheDocument();
    expect(screen.getByText(/170/i)).toBeInTheDocument();
  });
  it("shows Not Applicable when there is no data", async () => {
    const character = {
      id: "1",
    };
    render(<CharacterFeatures character={character} />);
    expect(screen.getAllByText('N/A')).toHaveLength(6);
  });
});
