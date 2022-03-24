import { tests } from "./utils";

const descriptions = [
  "uploads go in both directions",
  "PDFs are adequately waterproof",
  "videos are heated to 12,000,000 Kelvin",
  "subpixels can go rock climbing",
  "images are squarer than traffic cones",
  "metaproperties don't go too meta",
];

test("renders all test descriptions correctly:", () => {
  tests.forEach((item, index) => {
    expect(item.description).toEqual(descriptions[index]);
  });
});
