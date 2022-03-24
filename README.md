The concept of JavaScript promise was used for the assignemnt.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




### TASK

We would like you to build an automated test runner that executes tests in the 
browser and reports on their results as soon as each test has completed.
 
The objective of this assignment is to give us an idea about how you write maintainable and 
scalable code, when working as part of a team. We are a big fan of React and Typescript, but feel 
free to use whatever language, framework, tools, and libraries you like!

Start by copying the code below. It gives you a series of tests to run, which will randomly succeed 
or fail after running for a few seconds. Use these exact tests as the inputs to your test runner.


```javascript
const makeDummyTest = () => {
 const delay = 7000 + Math.random() * 7000;
 const testPassed = Math.random() > 0.5;
 
 return callback => {
   window.setTimeout(() => callback(testPassed), delay);
 };
};
 
const tests = [
 { description: "uploads go in both directions",          run: makeDummyTest() },
 { description: "PDFs are adequately waterproof",         run: makeDummyTest() },
 { description: "videos are heated to 12,000,000 Kelvin", run: makeDummyTest() },
 { description: "subpixels can go rock climbing",         run: makeDummyTest() },
 { description: "images are squarer than traffic cones",  run: makeDummyTest() },
 { description: "metaproperties don't go too meta",       run: makeDummyTest() },
];
```

 
All six tests should be run simultaneously. Using whatever design you like, make sure
that the user interface communicates the following:
 
- Status of each test (Not Started, Running, Passed, or Failed)
- Number of tests that have passed so far
- Number of tests that have failed so far
- Number of tests that are still running
- An indication (such as "DONE!") when all tests are finished 
 
Initially, each test should be in the “Not Started” state, waiting for the user to
press a button to run them. Once tests start running, the UI should update in
real-time without needing further user interaction.
 
We understand that you might not have enough time to arrive at a complete solution, 
but we are more interested in the approach you take than if you solve it completely. 
So please use the time that you are going to spend on this assignment to create something 
that is production-ready and follows good practices.
 
You can also help us get an idea about how you think about code by writing up comments 
with any interesting design or implementation details, contrasting your design with 
potential alternatives, etc.
 
Please include
a Readme with some brief instructions on how to build it.
 
When you’re finished, please send a ZIP file of your project by dropping it in the 
uploader on https://dam.bynder.com. When it asks for recipients, please fill in 
`nathalie.burgers@bynder.com; perica.zivkovic@bynder.com`.



Good luck!
