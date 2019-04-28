# ember-3x-codemods

[![Build Status](https://travis-ci.org/rajasegar/ember-3x-codemods.svg?branch=master)](https://travis-ci.org/rajasegar/ember-3x-codemods) 
[![Coverage Status](https://coveralls.io/repos/github/rajasegar/ember-3x-codemods/badge.svg?branch=master)](https://coveralls.io/github/rajasegar/ember-3x-codemods?branch=master)
[![npm version](http://img.shields.io/npm/v/ember-3x-codemods.svg?style=flat)](https://npmjs.org/package/ember-3x-codemods "View this project on npm")
[![dependencies Status](https://david-dm.org/rajasegar/ember-3x-codemods/status.svg)](https://david-dm.org/rajasegar/ember-3x-codemods)
[![devDependencies Status](https://david-dm.org/rajasegar/ember-3x-codemods/dev-status.svg)](https://david-dm.org/rajasegar/ember-3x-codemods?type=dev)



A [jscodeshift](https://github.com/facebook/jscodeshift) Codemod with a collection of transforms to address the list of [deprecations](https://deprecations.emberjs.com/v3.x) introduced to Ember during the 3.x cycle

To run a specific codemod from this project, you would run the following:

```
npx ember-3x-codemods <TRANSFORM NAME> path/of/files/ or/some**/*glob.js

# or

yarn global add ember-3x-codemods
ember-3x-codemods <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Transforms

### Deprecations & Transforms
| Introduced in | id | Transform |
| ------------- | -- | --------- |
| 3.1           | use-notifypropertychange... | [notify-property-change](https://github.com/rajasegar/ember-3x-codemods/tree/master/transforms/notify-property-change) |
| 3.3           | jquery-event| [jquery-event](https://github.com/rajasegar/ember-3x-codemods/tree/master/transforms/jquery-event) |
| 3.6           | ember-polyfills.deprecate-merge | [ deprecate-merge ](https://github.com/rajasegar/ember-3x-codemods/tree/master/transforms/deprecate-merge) |
| 3.6           | deprecate-router-events| [ deprecate-router-events ](https://github.com/rajasegar/ember-3x-codemods/tree/master/transforms/deprecate-router-events) |
| 3.6           | array.new-array-wrapper | [ new-array-wrapper ](https://github.com/rajasegar/ember-3x-codemods/tree/master/transforms/new-array-wrapper) |
| 3.6           | array.new-array-wrapper | [ array-wrapper ](https://github.com/rajasegar/ember-3x-codemods/tree/master/transforms/array-wrapper) |
| 3.8           | computed-property.property | [ cp-property ](https://github.com/rajasegar/ember-3x-codemods/tree/master/transforms/cp-property) |
| 3.8           | computed-property.volatile | [ cp-volatile ](https://github.com/rajasegar/ember-3x-codemods/tree/master/transforms/cp-volatile) |
| 3.8           | computed-property.property | [ cp-property-map ](https://github.com/rajasegar/ember-3x-codemods/tree/master/transforms/cp-property-map) |
| 3.9           | jquery-apis| [ jquery-apis ](https://github.com/rajasegar/ember-3x-codemods/tree/master/transforms/jquery-apis) |
| 3.10           | application-controller.router-properties| [ app-controller-router-props ](https://github.com/rajasegar/ember-3x-codemods/tree/master/transforms/app-controller-router-props) |
| 3.11          | function-prototype-extensions.observes | [ fpe-observes ](https://github.com/rajasegar/ember-3x-codemods/tree/master/transforms/fpe-observes) |
| 3.11          | function-prototype-extensions.on | [ fpe-on ](https://github.com/rajasegar/ember-3x-codemods/tree/master/transforms/fpe-on) |
| 3.11          | function-prototype-extensions.property | [ fpe-computed ](https://github.com/rajasegar/ember-3x-codemods/tree/master/transforms/fpe-computed) |


For more details, please visit the main Ember 3.x [deprecations](https://deprecations.emberjs.com/v3.x) page

### notify-property-change
Use notifyPropertyChange instead of propertyWillChange and propertyDidChange
[More Info](https://deprecations.emberjs.com/v3.x#toc_use-notifypropertychange-instead-of-propertywillchange-and-propertydidchange)

### cp-property
`.property()` is a modifier that adds additional property dependencies to an existing computed property
[More Info](https://deprecations.emberjs.com/v3.x#toc_computed-property-property)

### deprecate-merge
Using Ember.assign instead of Ember.merge
[More Info](https://deprecations.emberjs.com/v3.x#toc_ember-polyfills-deprecate-merge)

### deprecate-router-events
Application-wide transition monitoring events belong on the Router service, not spread throughout the Route classes. That is the reason for the existing willTransition and didTransition hooks/events on the Router. But they are not sufficient to capture all the detail people need.

[More Info](https://deprecations.emberjs.com/v3.x#toc_deprecate-router-events)

### jquery-apis
Replace jQuery APIs
[More Info](https://deprecations.emberjs.com/v3.x#toc_jquery-apis)

### jquery-event
Use native events instead of jQuery.Event
[More Info](https://deprecations.emberjs.com/v3.x#toc_jquery-event)

## Contributing

### Installation

* clone the repo
* change into the repo directory
* `yarn`

### Running tests

* `yarn test`

### Update Documentation

* `yarn update-docs`
