const express = require("express");
const fetch = require("node-fetch");
const app = express();
const PORT = process.env.PORT || 3000;

const JOKES_URL = "https://api.jsonbin.io/v3/b/683209668561e97a501afcf3"; // Your JSONBin link
const HEADERS = {
  "X-Master-Key": "" // Add if your bin is private
};

app.get("/", async (req, res) => {
  try {
    const response = await fetch(JOKES_URL, { headers: HEADERS });
    const data = await response.json();
    const jokes = data.record.jokes;
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.send(randomJoke);
  } catch (err) {
    res.send("Couldn't fetch a joke right now!");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
