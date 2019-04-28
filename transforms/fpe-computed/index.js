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
        property: { name: "computed" }
      }
    })
    //.forEach(p => console.log(p))
    .replaceWith(path => {
      let computedImport = j.importDeclaration(
        [j.importSpecifier(j.identifier("computed"))],
        j.literal("@ember/object")
      );

      let body = root.get().value.program.body;
      body.unshift(computedImport);

      return j.callExpression(
        j.identifier("computed"),
        path.value.arguments.concat(path.value.callee.object)
      );
    });


  return root.toSource();
}
