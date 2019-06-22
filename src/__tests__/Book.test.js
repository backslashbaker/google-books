import React from "react";
import Book from "../Book";
import App, { getBooks } from "../App";
import { shallow } from "enzyme";

const data = {
  title: "Harry Potter",
  authors: ["GB", "DB"],
  publisher: "Drizzle",
  infoLink: "http://openweathermap.org/img/w/09d.png",
  image: "http://openweathermap.org/img/w/09d.png"
};

it("renders without crashing", () => {
  const wrapper = shallow(<Book />);
  expect(wrapper).toHaveLength(1);
});

it("displays the title", () => {
  const wrapper = shallow(<Book title={data.title} />);
  expect(wrapper.find("title").text()).toContain("Harry Potter");
});
