import React from "react";
import App, { getBooks } from "../App";
import { shallow } from "enzyme";

it("renders app component", () => {
  shallow(<App />);
});

describe("api call", () => {
  const data = {
    items: {
      title: "Children of Blood and Bone",
      authors: "toni"
    }
  };
  const query = "Children of Blood and Bone";

  const originalFetch = global.fetch();
  const API_KEY = process.env.REACT_APP_API_KEY;

  it("makes call to google books api", async () => {
    const mockFetch = jest.fn(() => {
      return Promise.resolve({
        json: () => {
          return data;
        },
        catch: jest.fn()
      });
    });
    global.fetch = mockFetch;

    expect(await getBooks(query)).toBe(data);
    expect(mockFetch).toHaveBeenCalled();
    expect(mockFetch).toHaveBeenCalledWith(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`
    );

    global.fetch = originalFetch;
  });
});
