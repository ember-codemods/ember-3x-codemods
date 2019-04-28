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
