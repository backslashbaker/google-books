import React from "react";
import Book from "../Book";
import App, { getBooks } from "../App";
import { shallow } from "enzyme";

const data = {
  title: "Harry Potter",
  authors: ["DC", "DB"],
  publisher: "Drizzle",
  infoLink: "#",
  image: "#"
};

it("renders without crashing", () => {
  const wrapper = shallow(<Book />);
  expect(wrapper).toHaveLength(1);
});

it("displays the author", () => {
  const wrapper = shallow(<Book title={data.title} />);
  expect(wrapper.find("author").text()).toContain("DB");
});

it("displays the publisher", () => {
  const wrapper = shallow(<Book title={data.title} />);
  expect(wrapper.find("publisher").text()).toContain("Drizzle");
});

it("displays the title", () => {
  const wrapper = shallow(<Book title={data.title} />);
  expect(wrapper.find("title").text()).toContain("Harry Potter");
});
