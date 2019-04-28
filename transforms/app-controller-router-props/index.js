const { getParser } = require('codemod-cli').jscodeshift;
const { getOptions } = require('codemod-cli');

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const options = getOptions();
  const root = j(file.source);

  root
    .find(j.MemberExpression, {
      object: { type: "ThisExpression" },
      property: {
        name: "currentRouteName"
      }
    })
    //.forEach(p => console.log(p.parentPath.parentPath))
    .replaceWith(path => {
      root.find(j.ExportDefaultDeclaration).forEach(p => {
        //console.log(p.value.declaration.arguments[0].properties);
        let props = p.value.declaration.arguments[0].properties;
        props.unshift(
          j.property(
            "init",
            j.identifier("router"),
            j.callExpression(j.identifier("service"), [j.literal("router")])
          )
        );
      });

      return j.memberExpression(
        j.memberExpression(j.thisExpression(), j.identifier("router"), false),
        j.identifier("currentRouteName"),
        false
      );
    });

  return root.toSource();
}
