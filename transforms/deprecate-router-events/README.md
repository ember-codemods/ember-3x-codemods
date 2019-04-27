# deprecate-router-events


## Usage

```
npx ember-3x-codemods deprecate-router-events path/of/files/ or/some**/*glob.js

# or

yarn global add ember-3x-codemods
ember-3x-codemods deprecate-router-events path/of/files/ or/some**/*glob.js
```

## Input / Output

### From

```js

import Router from '@ember/routing/router';
import { inject as service } from '@ember/service';

export default Router.extend({
  currentUser: service('current-user'),

  willTransition(transition) {
    this._super(...arguments);
    if (!this.currentUser.isLoggedIn) {
      transition.abort();
      this.transitionTo('login');
    }
  },

  didTransition(privateInfos) {
    this._super(...arguments);
    ga.send('pageView', {
      pageName: privateInfos.name
    });
  }
});
```


### To

```js

import Router from '@ember/routing/router';
import { inject as service } from '@ember/service';

export default Router.extend({
  currentUser: service('current-user'),

  init() {
    this._super(...arguments);

    this.on("routeWillChange", transition => {
      if (!this.currentUser.isLoggedIn) {
        transition.abort();
        this.transitionTo('login');
      }
    });

    this.on("routeDidChange", transition => {
      ga.send('pageView', {
        pageName: privateInfos.name
      });
    });
  }
});

```
