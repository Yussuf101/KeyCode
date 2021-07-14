const keyPressed = document.getElementById("keyPressed");
const keyCode = document.getElementById("KCode");

window.addEventListener("keypress", (event)=>{
    let key = event.code;
    keyPressed.innerHTML = key;
});

window.addEventListener("keypress", (event)=>{
    let keyV = event.which;
    keyCode.innerHTML = keyV;
});