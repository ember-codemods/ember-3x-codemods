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
      const isOnOff = ["on", "off"].includes(path.value.callee.property?.name);
      const IsDomEvent = ["click", "blur", "change", "focus", "focusin", "select", "submit", "keydown", "keypress", "keyup", "focusout", "click", "dblclick", "focusout", "hover", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "toggle", "error", "resize", "scroll", "load", "ready", "unload"].includes(path.value.callee.property?.name);
      console.log(path.value.callee.property?.name);
      let newCallExp;
      if (isQuerySelector) {

        if (isOnOff) {
          const isOn = ["on"].includes(path.value.callee.property?.name);

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
                  j.memberExpression(j.identifier("el"), j.identifier(isOn ? "addEventListener" : "removeEventListener"), false),
                  path.value.arguments
                ),
                false
              )
            ]
          );
        } else if (IsDomEvent) {
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
                  [j.literal(path.value.callee.property?.name), ...path.value.arguments]
                ),
                false
              )
            ]
          );
        }
        else {
          newCallExp = path.node;
        }
      } else {
        if (isOnOff) {
          const isOn = ["on"].includes(path.value.callee.property?.name);
          newCallExp = j.callExpression(
            j.memberExpression(
              j.memberExpression(j.thisExpression(), j.identifier("element"), false),
              j.identifier(isOn ? "addEventListener" : "removeEventListener"),
              false
            ),
            path.value.arguments
          );
        } else if (IsDomEvent) {
          newCallExp = j.callExpression(
            j.memberExpression(
              j.memberExpression(j.thisExpression(), j.identifier("element"), false),
              j.identifier("addEventListener"),
              false
            ),
            [j.literal(path.value.callee.property?.name), ...path.value.arguments]
          );

        } else {
          newCallExp = path.node;
        }

      }
      return newCallExp;
    });

  return root.toSource();
}
