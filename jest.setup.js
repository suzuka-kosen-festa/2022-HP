const { setGlobalConfig } = require("@storybook/testing-react");
const globalStorybookConfig = require("./.storybook/preview");

setGlobalConfig(globalStorybookConfig);
