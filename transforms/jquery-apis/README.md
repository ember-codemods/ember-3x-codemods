# jquery-apis


## Usage

```
npx ember-3x-codemods jquery-apis path/of/files/ or/some**/*glob.js

# or

yarn global add ember-3x-codemods
ember-3x-codemods jquery-apis path/of/files/ or/some**/*glob.js
```

## Events

### From
```js

import Component from '@ember/component';

export default Component.extend({
  waitForAnimation() {
    this.$().on('transitionend', () => this.doSomething());
  }
});
```

### To

```js

import Component from '@ember/component';

export default Component.extend({
  waitForAnimation() {
    this.element.addEventListener('transitionend', () => this.doSomething());
  }
});

```


## Query Selector

### From
```js

import Component from '@ember/component';

export default Component.extend({
  waitForAnimation() {
    this.$('.animated').on('transitionend', () => this.doSomething());
  }
});
```

### To
```js

import Component from '@ember/component';

export default Component.extend({
  waitForAnimation() {
    this.element.querySelectorAll('.animated').forEach(el => el.addEventListener('transitionend', () => this.doSomething()));
  }
});
```
