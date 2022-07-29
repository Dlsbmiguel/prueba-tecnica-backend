const express = require("express");
const router = express.Router();
const Model = require("../Models/Customer");

//Post
router.post("/", async (req, res) => {
  const data = new Model(req.body);

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all
router.get("/", async (req, res) => {
  try {
    const data = await Model.find().populate("address");
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID
router.get("/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id).populate("address");
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Update address array
router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body.address;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(
      id,
      { $push: { address: updatedData } },
      options
    );

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete by ID Method
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
