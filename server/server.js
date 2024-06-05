const express = require("express");
const cors = require("cors");
const { database } = require("./utils");

const app = express();
app.use(cors());
app.use(express.json());

database.connect();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server Is Running" });
});

const { studentRoutes } = require("./routes");

app.use("/api/student/", studentRoutes);

module.exports = app;
