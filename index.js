const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBConnection Successfull!!"))
  .catch((err) => {
    console.log(err);
  });

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

// app.get("/", (req, res) => {
//   console.log("TEST");
//   res.send("Hello from homepage");
// });

app.listen(process.env.PORT || 3000, () => {
  console.log("Backend is running");
});
