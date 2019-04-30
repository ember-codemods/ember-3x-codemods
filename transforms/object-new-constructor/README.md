# object-new-constructor


## Usage

```
npx ember-3x-codemods object-new-constructor path/of/files/ or/some**/*glob.js

# or

yarn global add ember-3x-codemods
ember-3x-codemods object-new-constructor path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/object-new-constructor/__testfixtures__/basic.input.js)</small>):
```js
let obj1 = new EmberObject();
let obj2 = new EmberObject({ prop: 'value' });

const Foo = EmberObject.extend();
let foo = new Foo({ bar: 123 });

```

**Output** (<small>[basic.output.js](transforms/object-new-constructor/__testfixtures__/basic.output.js)</small>):
```js
let obj1 = EmberObject.create();
let obj2 = EmberObject.create({ prop: 'value' });

const Foo = EmberObject.extend();
let foo = new Foo({ bar: 123 });

```
<!--FIXTURES_CONTENT_END-->