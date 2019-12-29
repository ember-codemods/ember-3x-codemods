# fpe-computed


## Usage

```
npx ember-3x-codemods fpe-computed path/of/files/ or/some**/*glob.js

# or

yarn global add ember-3x-codemods
ember-3x-codemods fpe-computed path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/fpe-computed/__testfixtures__/basic.input.js)</small>):
```js
import EmberObject from '@ember/object';

let Person = EmberObject.extend({
  init() {
    this._super(...arguments);

    this.firstName = 'Betty';
    this.lastName = 'Jones';
  },

  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }.property('firstName', 'lastName')
});

let client = Person.create();

client.get('fullName'); // 'Betty Jones'

client.set('lastName', 'Fuller');
client.get('fullName'); // 'Betty Fuller'

```

**Output** (<small>[basic.output.js](transforms/fpe-computed/__testfixtures__/basic.output.js)</small>):
```js
import { computed } from '@ember/object';
import EmberObject from '@ember/object';

let Person = EmberObject.extend({
  init() {
    this._super(...arguments);

    this.firstName = 'Betty';
    this.lastName = 'Jones';
  },

  fullName: computed('firstName', 'lastName', function() {
    return `${this.firstName} ${this.lastName}`;
  })
});

let client = Person.create();

client.get('fullName'); // 'Betty Jones'

client.set('lastName', 'Fuller');
client.get('fullName'); // 'Betty Fuller'

```
<!--FIXTURES_CONTENT_END-->