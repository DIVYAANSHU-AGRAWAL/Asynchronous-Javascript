let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(1)
    }, 5000 );
    
})
p1.then(()=>{
    console.log("Hello")
})
p1.then(()=>{
    console.log("World")
})