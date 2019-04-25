const { getParser } = require('codemod-cli').jscodeshift;
const { getOptions } = require('codemod-cli');

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const options = getOptions();
  const root = j(file.source);
  root
    .find(j.MemberExpression, { 

      object: {
        type: "MemberExpression",
        object: {
          name: "event"
        },
        property: {
          name: "originalEvent"
        }
      }})
    .replaceWith(path => {
      return j.memberExpression(j.identifier(path.value.object.object.name),j.identifier(path.value.property.name),false)
    });

  return root.toSource();
}
