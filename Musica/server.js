const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>hello</h1>");
});

const PORT = 8000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
