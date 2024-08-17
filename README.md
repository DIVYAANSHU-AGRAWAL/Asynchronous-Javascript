# Asynchronous-Javascript
 Core concepts of Asynchronous JS (Promises,Chaining,Async/Await,FetchAPI)

## setTimeout(()=>{
//function code
},5000);      // Time in milliseconds

# Promises
Promise of code execution.
Either resolve or reject

# Async/await
Any function can be made async using 'async' keyword. The 'await' keyword pauses the function execution until the current promise gets resolved.

# Fetch API
Used to send or retreive data over Internet.
Fetch uses 2 .then() methods.
.json()
.text()

## Response object has 2 properties:
1) status: 200-299
2) ok: boolean (true)
3) headers

# .then() and .catch() should be used with fetch api.
