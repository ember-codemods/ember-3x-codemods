# ember-3x-codemods [BETA]

[![Build Status](https://travis-ci.org/rajasegar/ember-3x-codemods.svg?branch=master)](https://travis-ci.org/rajasegar/ember-3x-codemods) 
[![Coverage Status](https://coveralls.io/repos/github/rajasegar/ember-3x-codemods/badge.svg?branch=master)](https://coveralls.io/github/rajasegar/ember-3x-codemods?branch=master)
[![npm version](http://img.shields.io/npm/v/ember-3x-codemods.svg?style=flat)](https://npmjs.org/package/ember-3x-codemods "View this project on npm")
[![dependencies Status](https://david-dm.org/rajasegar/ember-3x-codemods/status.svg)](https://david-dm.org/rajasegar/ember-3x-codemods)
[![devDependencies Status](https://david-dm.org/rajasegar/ember-3x-codemods/dev-status.svg)](https://david-dm.org/rajasegar/ember-3x-codemods?type=dev)



A [jscodeshift]() Codemod with a collection of transforms to address the list of [deprecations](https://deprecations.emberjs.com/v3.x) introduced to Ember during the 3.x cycle

To run a specific codemod from this project, you would run the following:

```
npx ember-3x-codemods <TRANSFORM NAME> path/of/files/ or/some**/*glob.js

# or

yarn global add ember-3x-codemods
ember-3x-codemods <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Transforms

### notify-property-change
### cp-property
### deprecate-merge
### deprecate-router-events
### jquery-apis
### jquery-event

## Contributing

### Installation

* clone the repo
* change into the repo directory
* `yarn`

### Running tests

* `yarn test`

### Update Documentation

* `yarn update-docs`
