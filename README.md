Asynchronous JavaScript

This repository contains practice codes and examples demonstrating core concepts of Asynchronous JavaScript. Below are the key topics and concepts covered:

Core Concepts of Asynchronous JavaScript

1. setTimeout

The setTimeout function is used to delay the execution of a function for a specified number of milliseconds.

```javascript
setTimeout(() => {
    // Function code
}, 5000); // Time in milliseconds
```

2. Promises

Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value. A promise can be either resolved or rejected.

3. Promise Chaining

Promises allow chaining using .then() for sequential execution of asynchronous tasks.

4. Async/Await

Any function can be made asynchronous by using the async keyword. The await keyword pauses the execution of an async function until the current promise resolves.

```javascript
async function example() {
    let result = await somePromise;
    console.log(result);
}
```

5. Fetch API

The Fetch API is used to send or retrieve data over the internet. It returns a promise and typically uses .then() methods to handle the response.

Response Object Properties:

status: HTTP status codes (200-299 indicate success)

ok: A boolean value that indicates if the request was successful

headers: Contains response headers

Example:
```javascript
fetch('https://api.example.com/data')
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok');
    })
    .then(data => console.log(data))
    .catch(error => console.error('Fetch error:', error));
```

6. Error Handling

Use .catch() to handle errors in promises and try-catch for async/await.

Repository Contents

This repository contains:

Practice codes for each of the above concepts.

Examples demonstrating their usage in real-world scenarios.

How to Use

Clone the repository:
```
git clone https://github.com/<your-username>/asynchronous-javascript-practice.git
```

Navigate to the project directory:

```
cd asynchronous-javascript-practice
```

Open the files in your preferred code editor and run them using Node.js or in the browser console.

