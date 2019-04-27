# cp-property


## Usage

```
npx ember-3x-codemods cp-property path/of/files/ or/some**/*glob.js

# or

yarn global add ember-3x-codemods
ember-3x-codemods cp-property path/of/files/ or/some**/*glob.js
```

## Input / Output


### From

```js
const Person = EmberObject.extend({
  fullName: computed(function() {
    return `${this.firstName} ${this.lastName}`;
  }).property('firstName', 'lastName')
});
```


### To

```js
const Person = EmberObject.extend({
  fullName: computed('firstName', 'lastName', function() {
    return `${this.firstName} ${this.lastName}`;
  })
});
```
