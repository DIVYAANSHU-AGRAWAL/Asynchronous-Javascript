let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
       resolve(1) 
    }, 1000);
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
       resolve(2) 
    }, 2000);
})
let p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
       resolve(3) 
    }, 3000);
})

p1.then((value)=>{
    console.log(value)
})
p2.then((value)=>{
    console.log(value)
})
p3.then((value)=>{
    console.log(value)
})

// Jab p1,p2,p3 teenon resolve ho jaaen tab jaakar console par print karo kuch. 
// Ek bhi promise reject hua toh nahi chalega

let promise_all = Promise.all([p1,p2,p3])
promise_all.then((val)=>{
    console.log(val)
    console.log("All Promises resolved")
})

// agar koi promise reject hone par bhi result chahiye toh `Promise.allSettled` use karo

let promise_allSettled = Promise.allSettled([p1,p2,p3])
promise_allSettled.then((val)=>{
    console.log(val)
    console.log("All Promises resolved")
})

// `Promise.resolve` custom value resolve karta hai
let promise_all_resolve = Promise.resolve(6)
promise_all_resolve.then((val)=>{
    console.log(val)
    console.log("All Promises resolved")
})