const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Client = require("../models/client");
//get
router.get("/", (req, res, next) => {
  Client.find()
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
  const client = new Client({
    _id: new mongoose.Types.ObjectId(),
    Title: req.body.Title,
    Gender: req.body.Gender,
    Firstname:req.body.Firstname,
    Surename:req.body.Surename,
    DOB: req.body.DOB,
    U18: req.body.U18,
    MS: req.body.MS,
    Mobile:req.body.Mobile,
    Email:req.body.Email,
    Permission:req.body.Permission,
    Address1:req.body.Address1,
    Address2:req.body.Address2,
    Town:req.body.Town,
    CountryCity:req.body.CountryCity,
    Eircode:req.body.Eircode,
    Referrer: req.body.Referrer,
    RecordDate: req.body.RecordDate
  });
  client
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST requests to /clients",
        createdClient: result
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
router.get("/:clientId", (req, res, next) => {
  const id = req.params.clientId;
  Client.findById(id)
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
  Client.findByIdAndUpdate(id, { $set: req.body }, { new: true})
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({ error: err}))
})
//delete
router.delete("/:clientId", (req, res, next) => {
  const id = req.params.clientId;
  Client.remove({ _id: id })
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
