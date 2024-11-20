// let iN = document.getElementById("logIn");
let btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", function () {
    let uMail = document.getElementById("user-email").value;
    let uPass = document.getElementById("user-password").value;

    console.log(uMail)
    console.log(uPass)

    if (uMail === "c223410" && uPass === "12345") 
        window.location.href = "bank.html";
    else 
        alert("Wrong Password");
    
});