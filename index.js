require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;
const authRouter = require("./routes/auth");

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);

const start = async () => {
  try {
    mongoose.connect(
      process.env.DATABASE,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log("DATABASE IS CONNECTED!");
      }
    );
    app.listen(PORT, () => {
      console.log("Server is starting on port", +PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
