import "./TileComponent.scss";

export const TileComponent = ({ count, total, label }) => {
  return (
    <section className="tile-component">
      <div className="counts">
        {count} / {total}
      </div>
      <h3
        className={
          label === "Passed"
            ? "passed"
            : label === "Failed"
            ? "failed"
            : label === "All tests are done!"
            ? "notStarted"
            : label === "Running"
            ? "running"
            : "defaultStatus"
        }
      >
        {label}
      </h3>
    </section>
  );
};
