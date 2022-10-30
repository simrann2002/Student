const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (password.length < 6) throw "Password must be atleast of 6 characters";

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    const newUser = new User({
      fullName,
      email,
      password: hashedPass,
    });
    const user = await newUser.save();
    res.status(200).json(user);
    console.log(user);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      errors.email = "User not found";
      res.status(404).json({ errors });
      // stop further execution in this callback
      return;
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    // !validPassword && res.status(400).json("Wrong Credentials");
    if (!validPassword) {
      errors.validPassword = "User not found";
      res.status(400).json({ errors });
      // stop further execution in this callback
      return;
    }

    res.status(200).json(user);
    console.log(user);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    const { password, updatedAt, hash_password, isAdmin, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:username", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.params.username,
    });
    const { password, updatedAt, hash_password, isAdmin, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json(user);
      console.log("Account has be updated successfully");
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  } else {
    return res.status(403).json("You can update only your account!");
  }
});
module.exports = router;
