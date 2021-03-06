const { getParser } = require('codemod-cli').jscodeshift;
const { getOptions } = require('codemod-cli');

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const options = getOptions();
  const root = j(file.source);

  root
    .find(j.CallExpression, {
      callee: {
        object: {
          callee: {
            object: {
              type: "ThisExpression"
            },
            property: {
              name: "$"
            }
          }
        }
      }
    })
    .forEach(path => {
      //console.log(path);
    })
    .replaceWith(path => {
      //callee.object.arguments
      //console.log(path.value.callee.object.arguments);
      const isQuerySelector = path.value.callee.object.arguments.length > 0;
      //console.log(isQuerySelector);
      let newCallExp;
      if (isQuerySelector) {
        newCallExp = j.callExpression(
          j.memberExpression(
            j.callExpression(
              j.memberExpression(
                j.memberExpression(j.thisExpression(), j.identifier("element"), false),
                j.identifier("querySelectorAll")
              ),
              path.value.callee.object.arguments
            ),
            j.identifier("forEach"),
            false
          ),
          [
            j.arrowFunctionExpression(
              [j.identifier("el")],
              j.callExpression(
                j.memberExpression(j.identifier("el"), j.identifier("addEventListener"), false),
                path.value.arguments
              ),
              false
            )
          ]
        );
      } else {
        newCallExp = j.callExpression(
          j.memberExpression(
            j.memberExpression(j.thisExpression(), j.identifier("element"), false),
            j.identifier("addEventListener"),
            false
          ),
          path.value.arguments
        );
      }
      return newCallExp;
    });

  return root.toSource();
}
