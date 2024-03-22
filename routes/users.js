const express = require("express");
const mongoose = require("mongoose");

// const router = express.Router();

mongoose.connect("mongodb://localhost:27017/practicekaromojkaro");


const userscheme = mongoose.Schema({
  username:String,
  password:String,
  age:Number
});

module.exports  = mongoose.model("userdata",userscheme);