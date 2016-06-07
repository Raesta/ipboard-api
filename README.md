ipboard-api
======

Node package for interact with your [Ipboard](https://invisionpower.com/4guides/developing-plugins-and-applications/rest-api/) Community.
---

### Installation
```javascript
$ npm install ipboard-api
```

```javascript
$ npm install git://github.com/Raesta/ipboard-api.git
```

### Example
```javascript
var Ipboard = require('ipboard-api');

var ipboard = new Ipboard('YOURAPIURL', 'YOURAPIKEY');

ipboard.members.getAll(function(result) {
  console.log(result);
});
```

### Todo
- improve error system
