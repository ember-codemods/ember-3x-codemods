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
      root
        .find(j.ImportSpecifier, {
          imported: { name: "A" },
          local: { name: "A" }
        })
        //.forEach(i => console.log(i))
        .replaceWith(node => {
          return j.importSpecifier(j.identifier("A"), j.identifier("emberA"));
        });

      return j.callExpression(j.identifier("A"), []);
    });

  return root.toSource();
}
