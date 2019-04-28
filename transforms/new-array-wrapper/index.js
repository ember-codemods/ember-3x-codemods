const { getParser } = require('codemod-cli').jscodeshift;
const { getOptions } = require('codemod-cli');

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const options = getOptions();
  const root = j(file.source);

  root
    .find(j.NewExpression, {
      callee: {
        name: "A"
      }
    })
    //.forEach(p => console.log(p))
    .replaceWith(path => {
      return j.callExpression(
        j.identifier("A"),
        []
      );
    });

  return root.toSource();
}
