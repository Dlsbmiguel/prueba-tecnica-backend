require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mongoString = process.env.DATABASE_URL;
const PORT = process.env.PORT || 3000;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/customer", require("./Routes/customer"));
app.use("/api/address", require("./Routes/address"));

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
