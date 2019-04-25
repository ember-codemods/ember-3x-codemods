# notify-property-change
Use notifyPropertyChange instead of propertyWillChange and propertyDidChange

[Deprecations Added in 3.1](https://deprecations.emberjs.com/v3.x/#toc_use-notifypropertychange-instead-of-propertywillchange-and-propertydidchange)


## Usage

```
npx ember-3x-codemods notify-property-change path/of/files/ or/some**/*glob.js

# or

yarn global add ember-3x-codemods
ember-3x-codemods notify-property-change path/of/files/ or/some**/*glob.js
```

## Input / Output

### Input
```js
Ember.propertyWillChange(object, 'someProperty');
doStuff(object);
Ember.propertyDidChange(object, 'someProperty');

object.propertyWillChange('someProperty');
doStuff(object);
object.propertyDidChange('someProperty');
```

## Output
```js
doStuff(object);
Ember.notifyPropertyChange(object, 'someProperty');

doStuff(object);
object.notifyPropertyChange('someProperty');
```

