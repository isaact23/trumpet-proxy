import express from "express";
import cors from "cors";
import path from "path";

const PORT = process.env.PORT || 8080;
const PATH = path.join(path.dirname(new URL(import.meta.url).pathname), "./frontend/build");

const app = express();
app.use(cors());
app.use(express.static(PATH));

let img = null;
let notes = "G A B C D";

app.get("/", (req, res) => {
  res.send(path.join(PATH, "index.html"));
});

// Handle hardware request for music
app.get("/music", (req, res) => {
  // Send music data
  res.send(notes);
});

// Handle client request to upload image
app.post("/img", (req, res) => {

  // Store the image on the backend

  // Send image to convert to MIDI
  const text = "A B C";
});

app.listen(PORT, () => {
  console.log(`prosthetiproxy listening on ${PORT}`);
});