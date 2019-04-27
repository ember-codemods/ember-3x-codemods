const { getParser } = require('codemod-cli').jscodeshift;
const { getOptions } = require('codemod-cli');

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const options = getOptions();
  const root = j(file.source);

  root
    .find(j.CallExpression, {
      callee: {
        type: "MemberExpression",
        object: { callee: { name: "computed" } },
        property: { name: "property" }
      }
    })
  //.forEach(p => console.log(p))
    .replaceWith(path => {
      let args = [...path.value.arguments].concat(path.value.callee.object.arguments);
      return j.callExpression(j.identifier("computed"), args);
    });

  return root.toSource();
}
