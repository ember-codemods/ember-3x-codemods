# new-array-wrapper


## Usage

```
npx ember-3x-codemods new-array-wrapper path/of/files/ or/some**/*glob.js

# or

yarn global add ember-3x-codemods
ember-3x-codemods new-array-wrapper path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/new-array-wrapper/__testfixtures__/basic.input.js)</small>):
```js
let arr = new A();

```

**Output** (<small>[basic.output.js](transforms/new-array-wrapper/__testfixtures__/basic.output.js)</small>):
```js
let arr = A();

```
<!--FIXTURES_CONTENT_END-->