ipboard-api
======

[![NPM](https://nodei.co/npm/ipboard-api.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ipboard-api/)

[![npm version](https://badge.fury.io/js/ipboard-api.svg)](https://badge.fury.io/js/ipboard-api)

Node package for interact with your [Ipboard](https://invisionpower.com/4guides/developing-plugins-and-applications/rest-api/) Community.
---

### Installation
```javascript
$ npm install ipboard-api
```
or
```javascript
$ npm install git://github.com/Raesta/ipboard-api.git
```

### Example
```javascript
var Ipboard = require('ipboard-api');

var ipboard = new Ipboard('YOURAPIURL', 'YOURAPIKEY');

ipboard.members.getAll(null, function(result) {
  console.log(result);
});

ipboard.members.getAll({ page: 2 }, function(result) {
  console.log(result);
});
```

### Help
if you need more information, refer to the [Wiki](https://github.com/Raesta/ipboard-api/wiki)

### Todo
- improve error system
