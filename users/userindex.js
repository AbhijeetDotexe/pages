const express = require("express");
const router = express.Router();
const userModel = require("./users");
const bcrypt = require("bcrypt");
const saltRounds = 5;

router.get("/getusers", async (req, res) => {
  try {
    const users = await userModel.find({});
    res.json(users);
  } catch (error) {
    res.json({ error: "Error getting details of the users" });
  }
});

router.post("/create", async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, saltRounds);
    const newUser = new userModel(req.body);
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.json({ error: "Error adding new User" });
  }
});

router.delete("/delete", async (req, res) => {
  try {
    const deletedUser = await userModel.findOneAndDelete({
      _id: req.params.id,
    });
    res.json(deletedUser);
  } catch (error) {
    res.json({ error: "Error deleting the user" });
  }
});

router.patch("/update", async (req, res) => {
  try {
    const updatedUser = await userModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    res.json({ error: "Error updating the user" });
  }
});

module.exports = router;
