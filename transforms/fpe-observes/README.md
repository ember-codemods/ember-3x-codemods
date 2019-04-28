# fpe-observes


## Usage

```
npx ember-3x-codemods fpe-observes path/of/files/ or/some**/*glob.js

# or

yarn global add ember-3x-codemods
ember-3x-codemods fpe-observes path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/fpe-observes/__testfixtures__/basic.input.js)</small>):
```js
import EmberObject from '@ember/object';

export default EmberObject.extend({
  valueObserver: function() {
    // Executes whenever the "value" property changes
  }.observes('value')
});

```

**Output** (<small>[basic.output.js](transforms/fpe-observes/__testfixtures__/basic.output.js)</small>):
```js
import EmberObject from '@ember/object';

export default EmberObject.extend({
  valueObserver: observer('value', function() {
    // Executes whenever the "value" property changes
  })
});

```
<!--FIXTURES_CONTENT_END-->