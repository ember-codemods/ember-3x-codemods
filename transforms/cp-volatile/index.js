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
        property: { name: "volatile" }
      }
    })
    //.forEach(p => console.log(p.value.callee.object.arguments[0].body))
    .map(p => p.parentPath)
    .replaceWith(path => {
      return j.property(
        "get",
        j.identifier(path.value.key.name),
        j.functionExpression(
          j.identifier(path.value.key.name),
          [],
          path.value.value.callee.object.arguments[0].body,
          false,
          false
        )
      );
    });

  return root.toSource();
}
