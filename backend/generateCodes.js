const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "akademi_valorant"
});

db.connect(err => {
    if (err) throw err;
    console.log("Connected to MySQL");

    let values = [];
    for (let i = 0; i < 50; i++) {
        let code = Math.random().toString(36).substring(2, 10).toUpperCase(); // Kode random
        values.push([code, 0]);
    }

    const sql = "INSERT INTO redeem_codes (code, is_used) VALUES ?";
    db.query(sql, [values], (err) => {
        if (err) throw err;
        console.log("50 redeem codes added!");
        db.end();
    });
});