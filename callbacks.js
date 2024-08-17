//Callbacks.js
function loadScript(source,fun,fun2){
    let myscript = document.createElement("script");
    myscript.src = source;
    myscript.onload = fun;
    myscript.onerror = fun2;
    document.body.appendChild(myscript);
}

function success(){
    alert("script loaded successfully")
}
function failure(){
    alert("script load failure")
}

loadScript("./test.js",success,failure)