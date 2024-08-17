// Define an asynchronous function to get weather information
async function myWeather() {
  // Create a promise that simulates fetching the weather for Delhi
  let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 Degree");
    }, 2000);
  });
  // Create a promise that simulates fetching the weather for Bangalore
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 Degree");
    }, 5000);
  });
  console.log("Fetching Delhi Weather please wait...");

  // Wait for the Delhi weather promise to resolve and get its result
  let delhiW = await p1; // Stop the function execution until p1 gets fulfilled. Execute next line of function only after this line gets executed completely.
  console.log("Delhi Weather: ", delhiW);
  console.log("Fetching Bangalore Weather please wait...");

  // Wait for the Bangalore weather promise to resolve and get its result
  let Bangalorew = await p2; // Stop the function execution until p2 gets fulfilled. Execute next line of function only after this line gets executed completely.
  console.log("Bangalore Weather: ", Bangalorew);
}
// Call the async function to execute the weather fetching
myWeather();
