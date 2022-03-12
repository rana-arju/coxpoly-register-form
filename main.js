const login = () =>{
    const username = document.getElementById("username");
    const usernameValue = username.value;
    
    const password = document.getElementById("password");
    
    const passwordValue = parseInt(password.value);

    if (usernameValue == "ranaarju20@gmail.com" && passwordValue == "490225") {
        window.location.href = "register.html";
        document.getElementById("error").style.display = "none";
    }
    else{
        document.getElementById("error").style.display = "block";
    }
}
