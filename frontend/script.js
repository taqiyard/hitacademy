document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("login-button");

    // Contoh logika sederhana untuk menentukan relative path:
    // Jika URL mengandung "/" lebih dari satu kali, berarti berada di subfolder.
    const pathDepth = window.location.pathname.split("/").length - 2;
    const loginPath = (pathDepth > 1) ? "../login.html" : "login.html";

    if (localStorage.getItem("token")) {
        // Jika sudah login, ubah tombol menjadi Logout
        loginButton.innerText = "LOGOUT";
        loginButton.href = "#"; // Hindari link ke halaman login
        loginButton.onclick = function() {
            localStorage.clear();
            window.location.reload(); // Refresh halaman
        };
    } else {
        // Jika belum login, set path login sesuai lokasi halaman
        loginButton.innerText = "LOGIN";
        loginButton.href = loginPath;
    }
});