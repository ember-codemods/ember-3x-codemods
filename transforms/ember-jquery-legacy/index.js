const { getParser } = require('codemod-cli').jscodeshift;
const { getOptions } = require('codemod-cli');

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const options = getOptions();
  const root = j(file.source);


  root
    .find(j.MemberExpression, { 
      object: {
        name: "event"
      },
      property: {
        name: "originalEvent"
      }
    })
    //.forEach(p => console.log(p))
    .replaceWith(path => {

      let computedImport = j.importDeclaration(
        [j.importSpecifier(j.identifier("normalizeEvent"))],
        j.literal("ember-jquery-legacy")
      );

      let body = root.get().value.program.body;
      body.unshift(computedImport);
      return j.callExpression(j.identifier('normalizeEvent'),[path.value.object])
    });

  return root.toSource();
}
