import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders hi there paragraph", () => {
  const { getByText } = render(<App />);
  const paragraph = getByText(/Hi there!/i);
  expect(paragraph).toBeInTheDocument();
});

test("renders new paragraph", () => {
  const { getByText } = render(<App />);
  const paragraph = getByText(/A new react app is coming!/i);
  expect(paragraph).toBeInTheDocument();
});
