import "./DescriptionAndStatusComponent.scss";

export const DescriptionAndStatusComponent = ({ description, status }) => {
  return (
    <section className="descriptionAndStatusComponent">
      <h4>{description}</h4>
      <h5
        style={
          status === "Passed"
            ? { color: "#46c53e" }
            : status === "Failed"
            ? { color: "#e94b4b" }
            : status === "Not Started"
            ? { color: "#2099f3" }
            : status === "Running"
            ? { color: "#f5b31f" }
            : {}
        }
      >
        {status}
      </h5>
    </section>
  );
};
