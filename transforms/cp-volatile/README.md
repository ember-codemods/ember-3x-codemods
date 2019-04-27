# cp-volatile


## Usage

```
npx ember-3x-codemods cp-volatile path/of/files/ or/some**/*glob.js

# or

yarn global add ember-3x-codemods
ember-3x-codemods cp-volatile path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/cp-volatile/__testfixtures__/basic.input.js)</small>):
```js
const Person = EmberObject.extend({
  fullName: computed(function() {
    return `${this.firstName} ${this.lastName}`;
  }).volatile()
});

```

**Output** (<small>[basic.output.js](transforms/cp-volatile/__testfixtures__/basic.output.js)</small>):
```js
const Person = EmberObject.extend({
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
});

```
<!--FIXTURES_CONTENT_END-->