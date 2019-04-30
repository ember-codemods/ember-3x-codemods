# ember-jquery-legacy


## Usage

```
npx ember-3x-codemods ember-jquery-legacy path/of/files/ or/some**/*glob.js

# or

yarn global add ember-3x-codemods
ember-3x-codemods ember-jquery-legacy path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/ember-jquery-legacy/__testfixtures__/basic.input.js)</small>):
```js
export default Component.extend({
click(event) {
  let nativeEvent = event.originalEvent;
}
});

```

**Output** (<small>[basic.output.js](transforms/ember-jquery-legacy/__testfixtures__/basic.output.js)</small>):
```js
import { normalizeEvent } from "ember-jquery-legacy";
export default Component.extend({
click(event) {
  let nativeEvent = normalizeEvent(event);
}
});

```
<!--FIXTURES_CONTENT_END-->