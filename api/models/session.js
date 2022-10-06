//session model
const mongoose = require('mongoose');

const sessionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Client1ID:mongoose.Types.ObjectId,
    Client2ID:mongoose.Types.ObjectId,
    Client3ID:mongoose.Types.ObjectId,
    TherapistID:mongoose.Types.ObjectId,
    SessionDate: String,
    SessionTime: String,
    Fee: String,
    SessionNumber: String,
    Attendance: String,
    Type: String,
    Note: String,
    RecordDate:String
},{versionKey: false});

module.exports = mongoose.model('Session', sessionSchema);