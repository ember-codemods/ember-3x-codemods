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
        object: { type: "FunctionExpression" },
        property: { name: "on" }
      }
    })
    //.forEach(p => console.log(p))
    .replaceWith(path => {
      let onImport = j.importDeclaration(
        [j.importSpecifier(j.identifier("on"))],
        j.literal("@ember/object/evented")
      );

      let body = root.get().value.program.body;
      body.unshift(onImport);

      return j.callExpression(
        j.identifier("on"),
        path.value.arguments.concat(path.value.callee.object)
      );
    });

  
  return root.toSource({quote: 'single'});
}
