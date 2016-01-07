# cookie-util
cookie helper, json supported

## usage
cookie();                     // get all cookies 
cookie('username');           // return value of 'username'
cookie('username', 'hello');  // set 'user' and 'hello' pair
cookie('user', {name: 'world', age: 1}, {maxAge: 10000});
cookie('user', null)          // delete 'user'

## options
the third parameter includes 
maxAge  int (seconds) 
expires int (seconds)
path    string
domain  string
secure  boolean
