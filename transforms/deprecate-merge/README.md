# deprecate-merge


## Usage

```
npx ember-3x-codemods deprecate-merge path/of/files/ or/some**/*glob.js

# or

yarn global add ember-3x-codemods
ember-3x-codemods deprecate-merge path/of/files/ or/some**/*glob.js
```

## Input / Output

### From

```js
import { merge } from '@ember/polyfills';

var a = { first: 'Yehuda' };
var b = { last: 'Katz' };
merge(a, b);
```

### To

```js
import { assign } from '@ember/polyfills';

var a = { first: 'Yehuda' };
var b = { last: 'Katz' };
assign(a, b);
```

