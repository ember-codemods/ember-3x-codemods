'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({
  type: 'jscodeshift',
  name: 'cp-property-map',
});