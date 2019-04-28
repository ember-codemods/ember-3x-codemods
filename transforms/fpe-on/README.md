# fpe-on


## Usage

```
npx ember-3x-codemods fpe-on path/of/files/ or/some**/*glob.js

# or

yarn global add ember-3x-codemods
ember-3x-codemods fpe-on path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/fpe-on/__testfixtures__/basic.input.js)</small>):
```js
import EmberObject from '@ember/object';
import { sendEvent } from '@ember/object/events';

let Job = EmberObject.extend({
  logCompleted: function() {
    console.log('Job completed!');
  }.on('completed')
});

let job = Job.create();

sendEvent(job, 'completed'); // Logs 'Job completed!'

```

**Output** (<small>[basic.output.js](transforms/fpe-on/__testfixtures__/basic.output.js)</small>):
```js
import { on } from "@ember/object/evented";
import EmberObject from '@ember/object';
import { sendEvent } from '@ember/object/events';

let Job = EmberObject.extend({
  logCompleted: on('completed', function() {
    console.log('Job completed!');
  })
});

let job = Job.create();

sendEvent(job, 'completed'); // Logs 'Job completed!'

```
<!--FIXTURES_CONTENT_END-->