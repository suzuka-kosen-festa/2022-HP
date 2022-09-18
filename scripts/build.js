const StyleDictionaryPackage = require("style-dictionary");
const { createArray } = require("./utils");

StyleDictionaryPackage.registerTransform({
  name: "sizes/rem",
  type: "value",
  matcher(prop) {
    return ["fontSizes", "spacing", "borderRadius", "borderWidth", "sizing"].includes(prop.attributes.category);
  },
  transformer(prop) {
    return `${parseFloat(prop.original.value) / 16}rem`;
  },
});

const baseTransforms = ["attribute/cti", "sizes/rem"];
const scssTransforms = baseTransforms.concat(["name/cti/kebab"]);

function getStyleDictionaryConfig() {
  return {
    source: ["data/tmp.json"],
    format: {
      createArray,
    },
    platforms: {
      tailwind: {
        transforms: scssTransforms,
        buildPath: "src/styles/",
        files: [
          {
            destination: "_variables.json",
            format: "json/nested",
          },
        ],
      },
    },
  };
}
console.log("Build started...");
console.log("\n==============================================");
const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig());
StyleDictionary.buildPlatform("tailwind");
console.log("\nEnd processing");
console.log("\n==============================================");
console.log("\nBuild completed!");
