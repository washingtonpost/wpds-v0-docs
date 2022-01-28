const docgen = require("react-docgen-typescript");

export const getPropsTable = async (component = "icon") => {
  const options = {
    shouldExtractLiteralValuesFromEnum: true,
    savePropValueAsString: true,
    shouldExtractValuesFromUnion: true,
  };

  // Parse a file for docgen info
  const [{ props }] = docgen.parse(
    `node_modules/@washingtonpost/wpds-${component}/src/index.ts`,
    options
  );

  // Get the component's docgen info
  // object of objects into an array
  const propsArray = Object.entries(props).map(([key, value]) => ({
    name: key,
    type: value.type.name,
    rawType: value.type.name === "enum" ? value.type.raw.replace(/"/g, "") : "",
    required: `${value.required}`,
    description: value.description,
    defaultValue:
      value.defaultValue === null
        ? "----"
        : JSON.stringify(value.defaultValue, null, 2)
            .replace(/\\/g, "")
            .replace(/"/g, "")
            .replace(/({)|(})|(:)/g, "")
            .replace(/(value)/g, ""),
  }));

  return propsArray;
};
