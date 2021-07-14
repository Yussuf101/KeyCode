const keyPressed = document.getElementById("keyPressed");
const keyValue = document.getElementById("keyCode");

window.addEventListener("keypress", (event)=>{
    let key = event.code;
    keyPressed.innerHTML = key;
});

window.addEventListener("keypress", (event)=>{
    let keyValue = event.which;
    keyCode.innerHTML = keyValue;
});