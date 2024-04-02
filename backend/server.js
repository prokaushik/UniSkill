const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

mongoose.connect(
  "mongodb://127.0.0.1:27017/myLoginrtegisterDb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => {
  console.log("DB connected Successfully");
}).catch((err) => {
  console.error("DB connection failed:", err);
});


const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.send("hi");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({email: email});
  if(user){
    if(password === user.password){
      res.send({message: "Login Successfull", user: user})
    }else {
      res.send({message: "Password Didn't matched." })
    }
  }else {
    res.send({message: "User Not Found!"})
  }
});


app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (user) {
    res.send({ message: "User Already Registered" });
  } else {
    const user = new User({
      name: name,
      email: email,
      password: password,
    });

    try {
      await user.save();
      res.send({ message: "Successfully Registered!" });
    } catch (err) {
      res.send(err);
    }
  }
});


app.listen(9002, () => {
  console.log("app started on port 9002");
});
