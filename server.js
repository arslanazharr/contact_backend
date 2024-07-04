const express = require("express");
const cors = require("cors");
const contactRoute = require("./routes/contactRoutes");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", contactRoute);

app.listen(process.env.PORT || 3001, () => {
  console.log("Server is running on port 3001");
});

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => console.log(err));
