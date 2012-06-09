Based on [NewBase60](https://github.com/shiawuen/NewBase60) by [Tantek Çelik](http://tantek.com).

Try to solve an issue with NewBase60 where string with leading 0 will not be able to get back the same string back.

## Installation

    npm install new-base-61

## Example

```js

var nb61 = require('new-base-61');

// Convert string to 61 base number
var val = nb61.strtonum('Hello');

// Convert number value back to string
console.log(nb61.numtostr(val));  `     

```

## License

Released under [CC BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0/)