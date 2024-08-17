let p1 = new Promise((resolve,reject)=>{
    console.log("Promise Pending...");
    setTimeout(() => {
        resolve(true)
    }, 2000);
})
p1.then((val)=>{
    console.log("Promise Resolved!");
    console.log(`Promise Value: ${val}`);
    
})
