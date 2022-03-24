import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  expect(screen.getByText(/run tests/i)).toBeInTheDocument();
  expect(screen.getByText(/passed/i)).toBeInTheDocument();
  expect(screen.getByText(/failed/i)).toBeInTheDocument();
  expect(screen.getByText(/running/i)).toBeInTheDocument();
  expect(
    screen.getByText(/videos are heated to 12,000,000 Kelvin/i)
  ).toBeInTheDocument();
});
