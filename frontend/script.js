document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("login-button");

    const loginPath = "/login.html";  // pakai path absolut

    if (localStorage.getItem("token")) {
        loginButton.innerText = "LOGOUT";
        loginButton.href = "#";
        loginButton.onclick = function() {
            localStorage.clear();
            window.location.reload();
        };
    } else {
        loginButton.innerText = "LOGIN";
        loginButton.href = loginPath;
    }
});
