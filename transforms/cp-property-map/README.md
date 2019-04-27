# cp-property-map


## Usage

```
npx ember-3x-codemods cp-property-map path/of/files/ or/some**/*glob.js

# or

yarn global add ember-3x-codemods
ember-3x-codemods cp-property-map path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/cp-property-map/__testfixtures__/basic.input.js)</small>):
```js
const Person = EmberObject.extend({
  friendNames: map('friends', function(friend) {
    return friend[this.get('nameKey')];
  }).property('nameKey')
});

```

**Output** (<small>[basic.output.js](transforms/cp-property-map/__testfixtures__/basic.output.js)</small>):
```js
const Person = EmberObject.extend({
  friendNames: map('friends', ['nameKey'], function(friend) {
    return friend[this.get('nameKey')];
  })
});

```
<!--FIXTURES_CONTENT_END-->