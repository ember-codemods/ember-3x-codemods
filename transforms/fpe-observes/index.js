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
        property: { name: "observes" }
      }
    })
    //.forEach(p => console.log(p))
    .replaceWith(path => {
      return j.callExpression(
        j.identifier("observer"),
        path.value.arguments.concat(path.value.callee.object)
      );
    });

  return root.toSource();
}
