# app-controller-router-props


## Usage

```
npx ember-3x-codemods app-controller-router-props path/of/files/ or/some**/*glob.js

# or

yarn global add ember-3x-codemods
ember-3x-codemods app-controller-router-props path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/app-controller-router-props/__testfixtures__/basic.input.js)</small>):
```js
import Controller from '@ember/controller';
import fetch from 'fetch';

export default Controller.extend({
  store: service('store'),

  actions: {
    sendPayload() {
      fetch('/endpoint', {
        method: 'POST',
        body: JSON.stringify({
          route: this.currentRouteName
        })
      });
    }
  }
})

```

**Output** (<small>[basic.output.js](transforms/app-controller-router-props/__testfixtures__/basic.output.js)</small>):
```js
import Controller from '@ember/controller';
import fetch from 'fetch';

export default Controller.extend({
  router: service("router"),
  store: service('store'),

  actions: {
    sendPayload() {
      fetch('/endpoint', {
        method: 'POST',
        body: JSON.stringify({
          route: this.router.currentRouteName
        })
      });
    }
  }
})

```
<!--FIXTURES_CONTENT_END-->