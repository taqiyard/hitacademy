require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors());

// Koneksi Database MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "akademi_valorant"
});

db.connect(err => {
    if (err) {
        console.error("Database Connection Failed:", err);
    } else {
        console.log("Connected to MySQL");
    }
});

// API Login
app.post("/api/login", (req, res) => {
    const { email, password } = req.body;
    db.query("SELECT * FROM users WHERE email = ?", [email], async(err, results) => {
        if (err) return res.status(500).json({ message: "Database Error" });
        if (results.length === 0) return res.status(400).json({ message: "User not found" });

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid password" });

        const token = jwt.sign({ id: user.id }, "secretkey", { expiresIn: "1h" });
        res.json({ token, userId: user.id, is_prem: user.is_prem }); // Menambahkan userId
    });
});


// API Sign Up
app.post("/api/signup", async(req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query("INSERT INTO users (email, password) VALUES (?, ?)", [email, hashedPassword], (err) => {
        if (err) return res.status(500).json({ message: "Database Error" });
        res.json({ message: "User registered successfully" });
    });
});


app.post("/api/generate-code", (req, res) => {
    const { adminPassword } = req.body; // Simulasi keamanan admin

    if (adminPassword !== "admin123") {
        return res.status(403).json({ message: "Unauthorized" });
    }

    const randomCode = Math.random().toString(36).substring(2, 10).toUpperCase();
    db.query("INSERT INTO redeem_codes (code) VALUES (?)", [randomCode], (err) => {
        if (err) return res.status(500).json({ message: "Error generating code" });
        res.json({ message: "Code generated", code: randomCode });
    });
});

// ✅ 2. API untuk User Redeem Kode
app.post("/api/redeem", (req, res) => {
    const { userId, code } = req.body;
    console.log("Redeem request:", req.body);

    db.query("SELECT * FROM redeem_codes WHERE code = ? AND is_used = 0", [code], (err, result) => {
        if (err) {
            console.error("Error fetching code:", err);
            return res.status(500).json({ message: "Database error" });
        }

        if (result.length === 0) {
            return res.status(400).json({ message: "Invalid or used code" });
        }

        const newExpiry = new Date();
        newExpiry.setMonth(newExpiry.getMonth() + 1);
        console.log("New expiry:", newExpiry.toISOString());

        db.query(
            "UPDATE users SET is_prem = 1, subs_expiry = ? WHERE id = ?", [newExpiry, userId],
            (err, updateResult) => {
                if (err) {
                    console.error("Error updating subscription:", err);
                    return res.status(500).json({ message: "Error updating subscription" });
                }
                console.log("User updated:", updateResult);

                db.query("UPDATE redeem_codes SET is_used = 1 WHERE code = ?", [code], (err) => {
                    if (err) {
                        console.error("Error updating redeem code:", err);
                        return res.status(500).json({ message: "Error updating redeem code" });
                    }
                    res.json({ message: "Subscription activated!", expires: newExpiry });
                });
            }
        );
    });
});


// ✅ 3. Middleware untuk Cek Langganan
const checkSubscription = (req, res, next) => {
    const userId = req.body.userId;

    db.query("SELECT subs_expiry FROM users WHERE id = ?", [userId], (err, result) => {
        if (err) return res.status(500).json({ message: "Database error" });

        if (result.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        const subsExpiry = new Date(result[0].subs_expiry);
        const today = new Date();

        if (subsExpiry < today) {
            db.query("UPDATE users SET is_prem = 0 WHERE id = ?", [userId]);
            return res.status(403).json({ message: "Subscription expired" });
        }

        next();
    });
};

// ✅ 4. API untuk Akses Fitur Premium
app.post("/api/premium-content", checkSubscription, (req, res) => {
    res.json({ message: "Welcome to premium content!" });
});


// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));