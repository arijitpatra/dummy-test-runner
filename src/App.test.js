import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders all status texts correctly", () => {
  render(<App />);
  expect(screen.getByText(/passed/i)).toBeInTheDocument();
  expect(screen.getByText(/failed/i)).toBeInTheDocument();
  expect(screen.getByText(/running/i)).toBeInTheDocument();
});
