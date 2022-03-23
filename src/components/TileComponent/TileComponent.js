import "./TileComponent.scss";

export const TileComponent = ({ count, total, label }) => {
  return (
    <section className="tile-component">
      <div className="counts">
        {count} / {total}
      </div>
      <h3
        className="label"
        style={
          label === "Passed"
            ? { color: "#46c53e" }
            : label === "Failed"
            ? { color: "#e94b4b" }
            : label === "All tests are done!"
            ? { color: "#2099f3" }
            : label === "Running"
            ? { color: "#f5b31f" }
            : {}
        }
      >
        {label}
      </h3>
    </section>
  );
};
