const express = require("express");
const userRoutes = express.Router();
const UserData = require("../models/Userdata");


const checkAuth = require("../check-auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/Userdata");
const router = express.Router();

userRoutes.post("/signup",  (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
        username: req.body.username,
        phonenumber: req.body.phonenumber,
        slot: req.body.inputselect
      });
      user
        .save()
        .then((result) => {
          res.status(201).json({
            message: "User created!",
            result: result,
          });
        })
        .catch((err) => {
          res.status(500).json({
            message: "Invalid authentication credentials!",
          });
        });
    });
  });


userRoutes.post("/login", (req, res, next) => {
  let fetchedUser;
  console.log(req.body.email);
  UserData.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then((result) => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      const token = jwt.sign(
        {
          email: fetchedUser.email,
          userId: fetchedUser._id,
        },
        "secret_this_should_be_longer"
      );
      res.status(200).json({
        token: token,
        id: fetchedUser._id,
        role: fetchedUser.role,
        username: fetchedUser.email,
      });
    })
    .catch((err) => {
      return res.status(401).json({
        message: "Invalid authentication credentials!",
      });
    });
});

userRoutes.get('/:id',(req,res)=>{
  UserData.findOne({_id: req.params.id}).then((result) => {
    res.status(200).json({
      result
    });
  }).catch(() => {
    res.status(500).json({
      message: "No user found"
    });
  });
});


module.exports = userRoutes;
