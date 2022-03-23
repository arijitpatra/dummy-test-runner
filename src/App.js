import { useEffect, useState } from "react";
import { TileComponent } from "./components/TileComponent";
import { DescriptionAndStatusComponent } from "./components/DescriptionAndStatusComponent";
import "./App.scss";

const makeDummyTest = () => {
  const delay = 7000 + Math.random() * 7000;
  const testPassed = Math.random() > 0.5;

  return (callback) => {
    setTimeout(() => callback(testPassed), delay);
  };
};

const tests = [
  { description: "uploads go in both directions", run: makeDummyTest() },
  { description: "PDFs are adequately waterproof", run: makeDummyTest() },
  {
    description: "videos are heated to 12,000,000 Kelvin",
    run: makeDummyTest(),
  },
  { description: "subpixels can go rock climbing", run: makeDummyTest() },
  {
    description: "images are squarer than traffic cones",
    run: makeDummyTest(),
  },
  { description: "metaproperties don't go too meta", run: makeDummyTest() },
];

const testsResultDefault = tests.reduce((acc, curr) => {
  return [
    ...acc,
    {
      description: curr.description,
      status: "Not Started",
      passed: false,
      failed: false,
      running: false,
      default: "NA",
    },
  ];
}, []);

// console.log(testsResultDefault);

function App() {
  const [testResult, setTestResult] = useState(testsResultDefault);
  const [countRunning, setCountRunning] = useState(0);
  const [countPassed, setCountPassed] = useState(0);
  const [countFailed, setCountFailed] = useState(0);
  const [isAllDone, setIsAllDone] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // const handleCallBack = (something) => {
  //   console.log(something);
  //   return something;
  // };

  const handleClick = () => {
    setIsButtonDisabled(true);
    // const y = makeDummyTest();
    // const z = (something) => console.log(something);
    // y(z);
    // setCountRunning(tests.length);
    tests.forEach((i) => {
      const x = i.run;
      const y = new Promise((resolve) => x(resolve));
      //const z = x(handleCallBack);
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
    setCountRunning((countRunning) => {
      if (countRunning > 0) {
        return countRunning - (countPassed + countFailed);
      }
      return countRunning;
    });

    if (countPassed + countFailed === tests.length) {
      setIsAllDone(true);
    }
  }, [countPassed, countFailed]);

  return (
    <div className="App">
      <div className="header d-f f-f-w">
        <TileComponent
          count={countPassed}
          total={tests.length}
          label="Passed"
        />
        <TileComponent
          count={countFailed}
          total={tests.length}
          label="Failed"
        />
        <TileComponent
          count={countRunning}
          total={tests.length}
          label="Running"
        />
        <TileComponent
          count={countPassed + countFailed}
          total={tests.length}
          label={isAllDone ? "All tests are done!" : "Done"}
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
        <button onClick={handleClick} disabled={isButtonDisabled}>
          Run Tests
        </button>
        {isAllDone && (
          <h2 className="d-f j-c-c a-i-c">
            <img
              width="32"
              src="./checkmark.png"
              alt="checkmark"
              style={{ marginRight: "0.5rem" }}
            />
            Done!
          </h2>
        )}
      </section>
    </div>
  );
}

export default App;
