import React from "react";
import Book from "../Book";
import { shallow } from "enzyme";

const data = {
  title: "Harry Potter",
  authors: ["DC", "DB"],
  publisher: "Drizzle"
};

it("renders without crashing", () => {
  const wrapper = shallow(<Book />);
  expect(wrapper).toHaveLength(1);
});

it("displays the author", () => {
  const wrapper = shallow(<Book authors={data.authors} />);
  expect(wrapper.find(".authors")).toHaveLength(2);
});
// should return two list items with authors names

it("displays the publisher", () => {
  const wrapper = shallow(<Book publisher={data.publisher} />);
  expect(wrapper.find(".publisher").text()).toContain("Drizzle");
});
// should return name of publisher

it("displays the title", () => {
  const wrapper = shallow(<Book title={data.title} />);
  expect(wrapper.find(".title").text()).toContain("Harry Potter");
});
// should return name of title
