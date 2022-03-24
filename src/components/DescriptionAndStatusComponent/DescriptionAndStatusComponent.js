import "./DescriptionAndStatusComponent.scss";

export const DescriptionAndStatusComponent = ({ description, status }) => {
  return (
    <section className="descriptionAndStatusComponent">
      <h4>{description}</h4>
      <h5
        className={
          status === "Passed"
            ? "passed"
            : status === "Failed"
            ? "failed"
            : status === "Not Started"
            ? "notStarted"
            : status === "Running"
            ? "running"
            : {}
        }
      >
        {status}
      </h5>
    </section>
  );
};
