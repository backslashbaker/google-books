import React from "react";
import Book from "./Book";
import App, { getBooks } from "./App";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<Book />);
});
