const { getParser } = require('codemod-cli').jscodeshift;
const { getOptions } = require('codemod-cli');

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const options = getOptions();
  const root = j(file.source);

  root
    .find(j.CallExpression, {
      callee: {
        name: "merge"
      }
    })
    .forEach(path => {
      //console.log(path);
      path.value.callee.name = "assign";
    });

  let _imports = root
    .find(j.ImportDeclaration, { specifiers: [{ local: { name: "merge" } }] })
    .forEach(i => {
      //console.log(i.value.specifiers);
      i.value.specifiers
        .filter(s => {
          return s.local.name === "merge";
        })
        .forEach(t => {
          //console.log(t);
          t.local.name = "assign";
        });
    });
  return root.toSource();
}
