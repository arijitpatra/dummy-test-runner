import "./ButtonComponent.scss";

export const ButtonComponent = ({ onClick, isDisabled = false }) => {
  return (
    <button onClick={onClick} disabled={isDisabled}>
      Run Tests
    </button>
  );
};
