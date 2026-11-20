const express = require("express");
const cors = require("cors");
const db = require("./database");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Coy  Backend is running!");
});

app.get("/api/feed", (req, res) => {
    const profiles = db.prepare(
        "SELECT * FROM profiles WHERE id NOT IN (SELECT profile_id FROM swipes)"
    ).all();

    res.json(profiles);
});

app.post("/api/swipe", (req, res) => {
    const { profile_id, action } = req.body;

    if (!["like", "pass"].includes(action)) {
        return res.status(400).json({ error: "Invalid action" });
    }

    const profile = db.prepare(
        "SELECT * FROM profiles WHERE id = ?"
    ).get(profile_id);

    if (!profile) {
        return res.status(404).json({ error: "Profile not found" });
    }

    db.prepare(
        "INSERT INTO swipes (profile_id, action) VALUES (?, ?)"
    ).run(profile_id, action);

    if (action === "like" && profile.liked_me === 1) {
    db.prepare(
        "INSERT OR IGNORE INTO matches (profile_id) VALUES (?)"
    ).run(profile_id);

    return res.json({ message: "It's a match!" });
}

res.json({ message: "Swipe saved successfully" });
});

app.get("/api/matches", (req, res) => {
    const matches = db.prepare(`
        SELECT profiles.*
        FROM matches
        JOIN profiles ON matches.profile_id = profiles.id
    `).all();

    res.json(matches);
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

