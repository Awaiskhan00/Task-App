const express = require("express");
const multer = require("multer");
const sharp = require('sharp')
const User = require("../models/user");
const auth = require("../middleware/auth");
const {sendWelcomeEmail, sendCancelationEmail } = require('../emails/account')

const router = new express.Router();

// Signup route
router.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    sendWelcomeEmail(user.email, user.name)
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    console.log(e)
    res.status(400).send(e);
  }
});

// Signin or login route
router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

// Logout route
router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();

    res.send();
  } catch (e) {
    res.status(500).send(e);
  }
});

// LogoutAll route
router.post("/users/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send(e);
  }
});

//Read route
router.get("/users/me", auth, async (req, res) => {
  res.send(req.user);
});

// Update route
router.patch("/users/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "age"];
  const isValidOpertion = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOpertion) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.send(req.user);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Delete route
router.delete("/users/me", auth, async (req, res) => {
  try {
    await req.user.deleteOne();
    sendCancelationEmail(req.user.email, req.user.name)
    res.send(req.user);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

const upload = multer({
//  dest: "avatars",
  limits: {
    fileSize: 1000000, // 1000000 = 1 MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      // regular ecpression
      return cb(new Error("Please upload an image"));
    }

    cb(undefined, true);
  },
});

// Create avatar
router.post("/users/me/avatar", auth, upload.single("avatar"), async (req, res) => {
  try {
    // Check if the file is present
    if (!req.file) {
      return res.status(400).send({ error: "No file uploaded." });
    }

    // Use sharp to resize the uploaded image to 250x250 pixels and convert it to PNG format before saving it as a buffer
    const buffer = await sharp(req.file.buffer).resize({ width : 250, height : 250}).png().toBuffer()

    // Set the avatar in the user document
    req.user.avatar = buffer
    await req.user.save();

    res.send();
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Delete avatar
router.delete("/users/me/avatar", auth, upload.single("avatar"), async (req, res) => {
  try {
    req.user.avatar = undefined;
    await req.user.save();
    res.status(204).send(); // Use 204 for successful deletion
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

router.get("/users/:id/avatar", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    if (!user.avatar) {
      return res.status(404).send({ error: "Avatar not found for this user" });
    }

    res.set("Content-Type", "image/png"); // Set the appropriate content type
    res.send(user.avatar);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

module.exports = router;
