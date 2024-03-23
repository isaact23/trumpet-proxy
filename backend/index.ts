import express from "express";
import path from "path";

const PORT = process.env.PORT || 8080;
const PATH = path.join(__dirname, "../frontend/build");

const app = express();

let img = null;
let notes = "G A B C D";

app.use(express.static(PATH));

app.get("/", (req, res) => {
  res.send(path.join(PATH, "index.html"));
});

// Handle hardware request for music
app.get("/music", (req, res) => {
  // Send music data
});

// Handle client request to upload image
app.post("/img", async (req, res) => {

  // Store the image on the backend

  // Send image to convert to MIDI
  const text = "A B C";

  // Store OpenAI results on backend
  if (text != null) {
    notes = text;
    console.log(notes);
  } else {
    console.log("OpenAI query failed");
  }

  res.end();
});

app.listen(PORT, () => {
  console.log(`prosthetiproxy listening on ${PORT}`);
});