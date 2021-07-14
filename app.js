const keyPressed = document.getElementById("keyPressed");
const keyValue = document.getElementById("KCode");

window.addEventListener("keypress", (event)=>{
    let key = event.code;
    keyPressed.innerHTML = key;
});

window.addEventListener("keypress", (event)=>{
    let keyValue = event.key;
    keyCode.innerHTML = keyValue;
});