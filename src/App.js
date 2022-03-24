import { useEffect, useState, lazy, Suspense } from "react";
import { DescriptionAndStatusComponent } from "./components/DescriptionAndStatusComponent";
import { ButtonComponent } from "./components/ButtonComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { tests, testsResultInitialData } from "./utils/utils";
import "./App.scss";

// lazily loading the component here
const DoneComponent = lazy(() =>
  import("./components/DoneComponent/DoneComponent.js")
);

function App() {
  const [testResults, setTestResults] = useState(testsResultInitialData);
  const [countRunning, setCountRunning] = useState(0);
  const [countPassed, setCountPassed] = useState(0);
  const [countFailed, setCountFailed] = useState(0);
  const [isAllDone, setIsAllDone] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // run the tests when the button is clicked
  const handleClick = () => {
    setIsButtonDisabled(true);
    tests.forEach((test) => {
      // this will call makeDummyTest and return a function
      const fn = test.run;

      // we created a Promise and resolve is our callback
      const promiseForDummy = new Promise((resolve) => fn(resolve));

      // updating the inital data and updating some values here
      const updatedTestResults = testResults.map((item) => {
        if (item.description === test.description) {
          item.status = "Running";
          item.running = true;

          // when the promise resolves, update the status and the counts for the test
          promiseForDummy.then((result) => {
            item.default = result;
            item.status = result ? "Passed" : "Failed";
            item.passed = result;
            item.failed = !result;
            item.running = false;
            setTestResults([...testResults]);
            setCountPassed((countPassed) => countPassed + (result ? 1 : 0));
            setCountFailed((countFailed) => countFailed + (!result ? 1 : 0));
          });
        }
        return item;
      });
      setCountRunning((countRunning) => countRunning + 1);
      setTestResults(updatedTestResults);
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

      <section className="ta-c">
        {testResults.map((item) => {
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
