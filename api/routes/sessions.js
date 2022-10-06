const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Session = require("../models/session");
//get
router.get("/", (req, res, next) => {
  Session.find()
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
  const session = new Session({
    _id: new mongoose.Types.ObjectId(),
    Client1ID: req.body.Client1ID,
    Client2ID: req.body.Client2ID,
    Client3ID: req.body.Client3ID,
    TherapistID: req.body.TherapistID,
    SessionDate: req.body.SessionDate,
    SessionTime: req.body.SessionTime,
    Fee: req.body.Fee,
    SessionNumber: req.body.SessionNumber,
    Attendance: req.body.Attendance,
    Type: req.body.Type,
    Note: req.body.Note,
    RecordDate: req.body.RecordDate
  });
  session
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST requests to /sessions",
        createdSession: result
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
router.get("/:sessionId", (req, res, next) => {
  const id = req.params.sessionId;
  Session.findById(id)
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
  Session.findByIdAndUpdate(id, { $set: req.body }, { new: true})
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({ error: err}))
})
//delete
router.delete("/:sessionId", (req, res, next) => {
  const id = req.params.sessionId;
  Session.remove({ _id: id })
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
