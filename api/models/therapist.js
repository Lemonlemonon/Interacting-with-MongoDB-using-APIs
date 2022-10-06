//personal model
const mongoose = require('mongoose');

const therapistSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Title:String,
    Firstname:String,
    Surename:String,
    Mobile:String,
    Email:String,
    Address1:String,
    Address2:String,
    Town:String,
    CountryCity:String,
    Eircode:String,
    RecordDate:String
},{versionKey: false});

module.exports = mongoose.model('Therapist', therapistSchema);