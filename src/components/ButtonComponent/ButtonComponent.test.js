import { render, screen, fireEvent } from "@testing-library/react";
import { ButtonComponent } from "./ButtonComponent";

it("should render Button:", () => {
  render(
    <ButtonComponent onClick={() => {}} isDisabled={false} label="Run Tests" />
  );
  const btn = screen.getByTestId("buttonComponent");
  expect(btn).toBeInTheDocument();
});

it("should render the pased label:", () => {
  render(
    <ButtonComponent onClick={() => {}} isDisabled={false} label="Run Tests" />
  );
  expect(screen.getByText(/Run Tests/)).toBeInTheDocument();
});

it("should call click handler function only once on button click:", () => {
  const mockOnClick = jest.fn();
  render(
    <ButtonComponent
      onClick={mockOnClick}
      isDisabled={false}
      label="Run Tests"
    />
  );
  const btn = screen.getByTestId("buttonComponent");
  fireEvent.click(btn);
  expect(mockOnClick).toHaveBeenCalledTimes(1);
});

it("should render a disabled button:", () => {
  const mockOnClick = jest.fn();
  render(
    <ButtonComponent
      onClick={mockOnClick}
      isDisabled={true}
      label="Run Tests"
    />
  );
  const btn = screen.getByTestId("buttonComponent");
  expect(btn).toBeDisabled();
});
