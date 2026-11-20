const db = require("./database");

db.prepare("DELETE FROM swipes").run();
db.prepare("DELETE FROM matches").run();

console.log("Swipes and matches reset successfully!");