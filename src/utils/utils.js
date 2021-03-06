const makeDummyTest = () => {
  const delay = 7000 + Math.random() * 7000;
  const testPassed = Math.random() > 0.5;

  return (callback) => {
    setTimeout(() => callback(testPassed), delay);
  };
};

export const tests = [
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

// creating a store which will hold the values of each of the tests progress, default will become true or false when the promise resolves
export const testsResultInitialData = tests.reduce((acc, curr) => {
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
