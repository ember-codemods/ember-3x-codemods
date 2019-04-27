# jquery-event


## Usage

```
npx ember-3x-codemods jquery-event path/of/files/ or/some**/*glob.js

# or

yarn global add ember-3x-codemods
ember-3x-codemods jquery-event path/of/files/ or/some**/*glob.js
```

## Input / Output


### From
```js

// your event handler:
export default Component.extend({
click(event) {
  let x = event.originalEvent.clientX;
}
});

```


### To
```js

// your event handler:
export default Component.extend({
click(event) {
  let x = event.clientX;
}
});
```
