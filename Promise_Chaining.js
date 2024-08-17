let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(56);
  }, 2000);
});

p1.then((value) => {
    console.log("Resolved first time after 2 seconds");
  console.log(value);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("true");
    }, 2000);
  });
})
  .then((value) => {
    console.log("Resolved after 4 seconds");
    console.log(value)
  })
  