import { getYear } from "../helpers";

describe("getYear", () => {
  it("returns null when no data", async () => {
    const result = getYear();
    expect(result).toBe(null);
  });
  it("returns year when there is data", async () => {
    const result = getYear("2024-03-04");
    expect(result).toBe(2024);
  });
  it("returns null when there is a string", async () => {
    const result = getYear("dgdryjtyjr");
    expect(result).toBe(null);
  });
});
