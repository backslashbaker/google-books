import React from "react";
import App, { getBooks } from "../App";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<App />);
});

// it("when search button is clicked", () => {
//   const wrapper = shallow(<App />);

//   const button = wrapper.find(".search-button");
//   button.simulate("click");
//   console.log(wrapper.props());
// });

describe("api call", () => {
  const data = {
    items: {
      title: "Children of Blood and Bone",
      authors: "toni"
    }
  };
  const query = "Harry Potter";

  const originalFetch = global.fetch();
  const API_KEY = process.env.REACT_APP_API_KEY;

  it("makes call to google books api", async () => {
    const mockFetch = jest.fn(() => {
      return {
        json: () => {
          return data;
        }
      };
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
