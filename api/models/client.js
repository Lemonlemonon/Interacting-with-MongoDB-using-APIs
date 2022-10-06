//personal model
const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Title:String,
    Gender:String,
    Firstname:String,
    Surename:String,
    DOB:String,
    U18:String,
    MS:String,
    Mobile:String,
    Email:String,
    Permission:String,
    Address1:String,
    Address2:String,
    Town:String,
    CountryCity:String,
    Eircode:String,
    Referrer:String,
    RecordDate:String
},{versionKey: false});

module.exports = mongoose.model('Client', clientSchema);