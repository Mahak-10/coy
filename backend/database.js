
const Database = require("better-sqlite3");

const db = new Database("coy.db");

// Create profiles table
db.exec(`
    CREATE TABLE IF NOT EXISTS profiles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        name TEXT NOT NULL,
        age INTEGER NOT NULL,
        photo TEXT,
        bio TEXT,
        college TEXT,
        city TEXT,
        interests TEXT,
        liked_me INTEGER DEFAULT 0
    )
`);



db.exec(`
    CREATE TABLE IF NOT EXISTS swipes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        profile_id INTEGER NOT NULL,
        action TEXT NOT NULL CHECK(action IN ('like', 'pass')),
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (profile_id) REFERENCES profiles(id),
        UNIQUE(profile_id)
    )
`);

db.exec(`
    CREATE TABLE IF NOT EXISTS matches (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        profile_id INTEGER NOT NULL UNIQUE,
        matched_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (profile_id) REFERENCES profiles(id)
    )
`);

module.exports = db;