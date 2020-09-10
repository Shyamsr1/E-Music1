const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/UserDb');
const Schema = mongoose.Schema;
var NewUserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  serialNumber : { type: String },
  batchTotalStudents : {type : Number},
  slot : { type: String, required: true },
  email: { type: String, required: true },
  phonenumber : {type : String},
  startdate: { type: Date, default: Date.now },
  enddate: { type: Date },
  attendanceCount : {type : Number},
  feepaid : {type : Boolean, default:false},
  batchcompleted : {type : Boolean, default:false},
  batchmodified : {type : Boolean, default: false},
  admitted : {type : Boolean, default: false},
  role: { type: String, default: "Student" }
});
var Userdata = mongoose.model("user", NewUserSchema);
module.exports = Userdata;
