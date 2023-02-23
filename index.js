require("dotenv").config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const express = require("express");
const mongoose = require("mongoose");
// const User = require("./models/user");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("Connection established with Mongo DB");
});

app.get("/", function (req, res) {
  res.send("Hello Samyak P");
});

const userRoutes = require("./routes/users");
const contactRoutes = require("./routes/contacts");
// const contactRoutes = require("./routes/contacts");
// const brandenquiryRoutes = require("./routes/brandenquirys");

app.use("/users", userRoutes, cors());
app.use("/contacts", contactRoutes, cors());

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
