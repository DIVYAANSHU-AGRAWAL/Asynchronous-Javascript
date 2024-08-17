// Initiate the fetch request
let p = fetch("https://jsonplaceholder.typicode.com/todos/1");

// Handle the response
p.then((response) => {
  console.log("Response Status:", response.status);     // Log the status code
  console.log("Response OK:", response.ok);             // Log if the response status is OK (status in the range 200-299)
  console.log("Response Headers:", response.headers);   // Log the headers

  // Return the response.json() promise to handle the JSON data in the next .then()
  return response.json();
})
  .then((data) => {
    console.log("Response JSON Data:", data); // Log the parsed JSON data
  })
  .catch((error) => {
    console.error("Error:", error); // Handle any errors that occurred during the fetch operation
  });

// Log the fetch promise (this will show the pending state of the promise)
console.log(p);

// 2 baar .then() use karna padta hai fetch api mein.