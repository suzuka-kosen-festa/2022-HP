/**
 *
 * @param {string} text
 * @return {string}
 */
function clearAndUpper(text) {
  return text.replace(/-/, "").toUpperCase();
}

/**
 *
 * npm run new:fc
 */
module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: "select",
        name: "category",
        message: "Which Atomic Design category?",
        choices: ["atoms", "molecules", "organisms", "templates"],
      },
      {
        type: "input",
        name: "component_name",
        message: "What is the name of component?",
      },
      {
        type: "input",
        name: "dir",
        message: "Where is the directory? (No problem in blank)",
      },
      {
        type: "confirm",
        name: "have_props",
        message: "Is it have props?",
      },
    ];
    return inquirer.prompt(questions).then(answers => {
      const { category, component_name, dir, have_props } = answers;
      const path = `${category}/${dir ? `${dir}/` : ``}${component_name}`;
      const abs_path = `src/components/${path}`;
      const upper_component_name = component_name.replace(/(^\w|-\w)/g, clearAndUpper);
      const props = have_props ? "({})" : "()";
      return { ...answers, path, abs_path, upper_component_name, props };
    });
  },
};
