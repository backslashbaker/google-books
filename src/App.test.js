import React from "react";
import ReactDOM from "react-dom";
import App, { getBooks } from "./App";
import { exportAllDeclaration } from "@babel/types";

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });



describe("api call", () => {
  const data = {
    items: {
      title: 'Children of Blood and Bone',
      authors: 'toni'
    }
  }
  const query = "Harry Potter";

  const originalFetch = global.fetch()

  it("makes call to google books api", async () => {
    global.fetch = () => {
      return {
        json: () => {
          return data
        } 
      };
    };
    expect(await getBooks(query)).toBe(data)

    global.fetch = originalFetch
  
  });
});
