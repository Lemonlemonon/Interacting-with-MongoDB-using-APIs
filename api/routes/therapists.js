const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Therapist = require("../models/therapist");
//get
router.get("/", (req, res, next) => {
  Therapist.find()
    .exec()
    .then(docs => {
      console.log(docs);
      //   if (docs.length >= 0) {
      res.status(200).json(docs);
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});
//post
router.post("/", (req, res, next) => {
  const therapist = new Therapist({
    _id: new mongoose.Types.ObjectId(),
    Title: req.body.Title,
    Firstname:req.body.Firstname,
    Surename:req.body.Surename,
    Mobile:req.body.Mobile,
    Email:req.body.Email,
    Address1:req.body.Address1,
    Town:req.body.Town,
    CountryCity:req.body.CountryCity,
    Eircode:req.body.Eircode,
    RecordDate: req.body.RecordDate
  });
  therapist
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST requests to /therapists",
        createdTherapist: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});
//get with id
router.get("/:therapistId", (req, res, next) => {
  const id = req.params.therapistId;
  Therapist.findById(id)
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});
//update
router.patch('/:id', (req, res, next) => {
  const id = req.params.id;
  Therapist.findByIdAndUpdate(id, { $set: req.body }, { new: true})
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({ error: err}))
})
//delete
router.delete("/:therapistId", (req, res, next) => {
  const id = req.params.therapistId;
  Therapist.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;
