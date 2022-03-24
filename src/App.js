import { useEffect, useState, lazy, Suspense } from "react";
import { DescriptionAndStatusComponent } from "./components/DescriptionAndStatusComponent";
import { ButtonComponent } from "./components/ButtonComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { tests, testsResultInitialData } from "./utils/utils";
import "./App.scss";

const DoneComponent = lazy(() =>
  import("./components/DoneComponent/DoneComponent.js")
);

function App() {
  const [testResult, setTestResult] = useState(testsResultInitialData);
  const [countRunning, setCountRunning] = useState(0);
  const [countPassed, setCountPassed] = useState(0);
  const [countFailed, setCountFailed] = useState(0);
  const [isAllDone, setIsAllDone] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleClick = () => {
    setIsButtonDisabled(true);
    tests.forEach((i) => {
      const x = i.run;

      // we created a Promise and resolve is our callback
      const y = new Promise((resolve) => x(resolve));
      const updatedTestResult = testResult.map((j) => {
        if (j.description === i.description) {
          j.status = "Running";
          j.running = true;
          y.then((result) => {
            j.default = result;
            j.status = result ? "Passed" : "Failed";
            j.passed = result;
            j.failed = !result;
            j.running = false;
            setTestResult([...testResult]);
            setCountPassed((countPassed) => countPassed + (result ? 1 : 0));
            setCountFailed((countFailed) => countFailed + (!result ? 1 : 0));
          });
        }
        return j;
      });
      setCountRunning((countRunning) => countRunning + 1);
      setTestResult(updatedTestResult);
    });
  };

  useEffect(() => {
    // update count of tests that are running
    setCountRunning((countRunning) => {
      if (countRunning > 0) {
        return countRunning - (countPassed + countFailed);
      }
      return countRunning;
    });

    // logic to check if all tests are done
    if (countPassed + countFailed === tests.length) {
      setIsAllDone(true);
    }
  }, [countPassed, countFailed]);

  return (
    <div className="App">
      <div className="header d-f f-f-w">
        <HeaderComponent
          countPassed={countPassed}
          countFailed={countFailed}
          countRunning={countRunning}
          total={tests.length}
          isAllDone={isAllDone}
        />
      </div>

      <section style={{ textAlign: "center" }}>
        {testResult.map((item) => {
          return (
            <DescriptionAndStatusComponent
              key={item.description}
              description={item.description}
              status={item.status}
            />
          );
        })}

        <ButtonComponent
          onClick={handleClick}
          isDisabled={isButtonDisabled}
          label="Run Tests"
        />

        <Suspense fallback={<div>Loading...</div>}>
          {isAllDone && <DoneComponent />}
        </Suspense>
      </section>
    </div>
  );
}

export default App;
