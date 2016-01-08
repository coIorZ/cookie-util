# cookie-util
cookie helper, json supported

## usage
cookie(); &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;// get all cookies  
cookie('username'); &emsp;&emsp;&emsp;&emsp;&emsp;// return value of 'username'  
cookie('username', 'hello'); &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// set value for 'username'   
cookie('user', {name: 'world', age: 1}, {maxAge: 10000}); &emsp;  //support json  
cookie('user', null) &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;// delete 'user'   

## options
the third parameter includes  
**maxAge**  int (seconds)  
**expires** int (seconds)  
**path**    string  
**domain**  string  
**secure**  boolean  
