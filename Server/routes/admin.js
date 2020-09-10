const express = require("express");
const adminRoutes = express.Router();
const UserData = require("../models/Userdata");
const nodemailer = require("nodemailer");

const verifyToken = require("../check-auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/Userdata");
const router = express.Router();



adminRoutes.get("/users", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  UserData.find().then((users) => {
    res.send(users);
});
});

adminRoutes.put("/admitstudent", verifyToken, (req, res) => {
// adminRoutes.put("/admitstudent", (req, res) => {
  console.log(req.body.id);
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  UserData.findByIdAndUpdate({ _id: req.body.id }, { admitted: true }).then(
      (users) => {
          console.log(users);
          res.send(users);

      // using nodemailer
      var transporter = nodemailer.createTransport({
        host: "smtp.mail.yahoo.com",
        service: "yahoo",
        port: 25,
        secure: false,

        auth: {
          user: "shyamsr21@yahoo.com",
          pass: "bboveeysyetfwjqz",
        },
        tls: {
          rejectUnauthorized: false,
        },
    });

      var info = transporter.sendMail({
        from: "shyamsr21@yahoo.com",
        to: users.email,
        subject: "ADMISSION EMAIL FROM SMT.GIRIJA",
        html:
          `Greetings Student, <br> 
          Thank you for your interest in joining 
          the online class conducted by Smt.Girija, we are glad to  
          send you this email for 
          confirming your admission to the respective slot chosen 
          and please find your details as mentioned below : 
          <br> <b>User Name : </b> ${users.username} , 
          <br> <b> Batch :</b> ${users.slot}, 
          <br> <b> Phone Number: </b> ${users.phonenumber},
          <br> <b> Your Batch commencement Date: </b> ${users.startdate}
          <br> Please ensure to attend the classes regularly and for further
          details you can directly contact +91 9841087380 and update your details.
          <br> Details of online session will be shared with you shortly.
          <br> With warm regards, <br> Smt. Girija`
      });
      // console.log("Message sent : %s", info.messageId);
    }
  );
});


adminRoutes.put("/updateUser", verifyToken, (req, res) => {
// adminRoutes.put("/updateUser", (req, res) => {
  console.log(req.body);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
    const id = req.body.user._id;
    const user = {
      username: req.body.user.username,
      password: req.body.user.password,
      serialNumber: req.body.user.serialNumber,
      batchTotalStudents: req.body.user.batchTotalStudents,
      slot: req.body.user.slot,
      email: req.body.user.email,
      phonenumber: req.body.user.phonenumber,
      startdate: req.body.user.startdate,
      enddate: req.body.user.enddate,
      attendanceCount: req.body.user.attendanceCount,
      feepaid: req.body.user.feepaid,
      batchcompleted: req.body.user.batchcompleted,
      batchmodified: req.body.user.batchmodified,
      role: req.body.user.role,
    };
    console.log(id, user);
    UserData.findByIdAndUpdate(id, user)
      .then(() => {
        res.status(200).send({ text: "User updated successfully" });
        
      })
      .catch((err) => {
        console.log("Update User Error: ", err);
      });
  });
  

  adminRoutes.post("/deleteUser", verifyToken, (req, res) => {
  // adminRoutes.post("/deleteUser", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
    console.log(req.body);
    const id = req.body.id;

    UserData.findByIdAndDelete({_id: id})
      .then(() => {
        res.status(200).send({ text: "User deleted successfully" });
      })
      .catch((err) => {
        console.log("Delete User Error: ", err);
      });
  });


module.exports = adminRoutes;
