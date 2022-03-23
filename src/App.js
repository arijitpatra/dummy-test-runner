import { useEffect, useState } from "react";
import "./App.css";

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

console.log(testsResultDefault);

function App() {
  const [testResult, setTestResult] = useState(testsResultDefault);

  //    All six tests should be run simultaneously. Using whatever design you like, make sure
  // that the user interface communicates the following:

  // - Status of each test (Not Started, Running, Passed, or Failed)
  // - Number of tests that have passed so far
  // - Number of tests that have failed so far
  // - Number of tests that are still running
  // - An indication (such as "DONE!") when all tests are finished

  // Initially, each test should be in the “Not Started” state, waiting for the user to
  // press a button to run them. Once tests start running, the UI should update in
  // real-time without needing further user interaction.

  // const handleCallBack = (something) => {
  //   console.log(something);
  //   return something;
  // };

  const handleClick = () => {
    // const y = makeDummyTest();
    // const z = (something) => console.log(something);
    // y(z);
    tests.forEach((i) => {
      const x = i.run;
      const y = new Promise((resolve) => x(resolve));
      console.log(y);
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
          });
        }
        return j;
      });
      setTestResult(updatedTestResult);
    });
  };

  useEffect(() => {
    console.log(testResult);
  }, [testResult]);

  return (
    <div className="App">
      {testResult.map((item) => {
        return (
          <div key={item.description}>
            <p>{item.description}</p>
            <p>{item.status}</p>
            <p>
              {item.default === true
                ? "Passed"
                : item.default === "NA"
                ? "-"
                : "Fail"}
            </p>
          </div>
        );
      })}
      <button onClick={handleClick}>Run Tests</button>
      {/* <button
        onClick={() =>
          setTestResult([
            ...testResult,
            {
              description: "fake",
              status: "Not Started",
              passed: false,
              failed: false,
              running: false,
              default: "NA",
            },
          ])
        }
      >
        refresh
      </button> */}
    </div>
  );
}

export default App;
