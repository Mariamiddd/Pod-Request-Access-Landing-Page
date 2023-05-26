const form = document.getElementById("form");
const input = document.getElementById("email-input");
const btn = document.getElementById("email-button");
const error = document.getElementById("error-message");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
btn.addEventListener("click", validateEmail);
function validateEmail(){
    if (!input.value.match(emailRegex)){
    error.textContent = "Oops! Please check your email";
    error.style.display = "block";
    return false;
}else{
    return true;
    error.style.display = "none";
}
}
form.addEventListener("submit", function(e){
    if (!validateEmail()){
    e.preventDefault();
    }
});