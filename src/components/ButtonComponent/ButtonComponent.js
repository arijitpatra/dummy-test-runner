import "./ButtonComponent.scss";

export const ButtonComponent = ({ onClick, isDisabled = false, label }) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      data-testid="buttonComponent"
    >
      {label}
    </button>
  );
};
