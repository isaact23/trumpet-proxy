import express from "express";
import cors from "cors";
import path from "path";

const PORT = process.env.PORT || 8080;
const PATH = path.join(path.dirname(new URL(import.meta.url).pathname), "./frontend/build");

const app = express();
app.use(cors());
app.use(express.static(PATH));

let img = null;
let notes = {
  0: {
    time: 400,
    val1: 0,
    val2: 0,
    val3: 0
  },
  1: {
    time: 400,
    val1: 1,
    val2: 1,
    val3: 1
  },
  2: {
    time: 400,
    val1: 1,
    val2: 0,
    val3: 1
  },
  3: {
    time: 400,
    val1: 0,
    val2: 1,
    val3: 1
  },
  4: {
    time: 400,
    val1: 1,
    val2: 1,
    val3: 0
  },
  5: {
    time: 400,
    val1: 1,
    val2: 0,
    val3: 0
  },
  6: {
    time: 400,
    val1: 0,
    val2: 1,
    val3: 0
  },
  7: {
    time: 400,
    val1: 0,
    val2: 0,
    val3: 0
  },
  8: {
    time: 400,
    val1: 0,
    val2: 1,
    val3: 1
  },
  9: {
    time: 400,
    val1: 1,
    val2: 1,
    val3: 0
  },
  10: {
    time: 400,
    val1: 1,
    val2: 0,
    val3: 0
  },
  11: {
    time: 400,
    val1: 0,
    val2: 1,
    val3: 0
  },
  12: {
    time: 400,
    val1: 0,
    val2: 0,
    val3: 0
  }
};

app.get("/", (req, res) => {
  console.log("Server got request for index.html");
  res.send(path.join(PATH, "index.html"));
});

// Handle hardware request for music
app.get("/music", (req, res) => {
  console.log("Server got request for music");

  // Send music data
  res.send(notes);
});

// Handle client request to upload image
app.post("/img", (req, res) => {
  res.send("Image received");
  console.log("Server received image");

  // Send image to convert to MIDI
  //const mozart = "MozartDataExport";

  // Convert MIDI to JSON format and store JSON
  //notes = mozartToJson(mozart);
});

app.listen(PORT, () => {
  console.log(`prosthetiproxy listening on ${PORT}`);
});