const { getParser } = require('codemod-cli').jscodeshift;
const { getOptions } = require('codemod-cli');

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const options = getOptions();
  const root = j(file.source);


  root
    .find(j.NewExpression, { 
      callee: {
        name: "EmberObject"
      }
    })
    //.forEach(p => console.log(p))
    .replaceWith(path => {

      return j.callExpression(j.memberExpression(j.identifier('EmberObject'),j.identifier('create'),false),path.value.arguments)
    });

  return root.toSource();
}
