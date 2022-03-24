import { TileComponent } from "../TileComponent";

export const HeaderComponent = ({
  countPassed,
  countFailed,
  countRunning,
  total,
  isAllDone,
}) => {
  return (
    <>
      <TileComponent count={countPassed} total={total} label="Passed" />
      <TileComponent count={countFailed} total={total} label="Failed" />
      <TileComponent count={countRunning} total={total} label="Running" />
      <TileComponent
        count={countPassed + countFailed}
        total={total}
        label={isAllDone ? "All tests are done!" : "Done"}
      />
    </>
  );
};
