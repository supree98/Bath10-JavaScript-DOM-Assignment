var message = document.getElementById("show");
var pass;
function validate() {
    pass = document.myForm.pass.value;
    if (pass.length > 8) {
        message.style.color = "green";
        message.innerHTML = "very good";
    } else if(pass.length > 5){
        message.style.color = "yellow";
        message.innerHTML = "good";
    } else {
        message.style.color = "red";
        message.innerHTML = "poor";
    }
}
