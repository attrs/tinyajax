# tinyajax

## Install

```sh
$ npm install tinyajax --save
```

```sh
$ bower install tinyajax
```

## Usage
```javascript
var ajax = require('tinyajax');

ajax(src, function(err, text) {
  ...
});

// sync
ajax(src, function(err, text) {
  ...
}, true);


// option
ajax(src, function(err, text) {
  ...
}, {
  sync: false,
  mimetype: 'application/json',
  headers: {
  	'X-Some-Header': 'value'
  },
  payload: {
    key: 'value'
  }
});
```