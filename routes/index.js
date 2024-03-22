var express = require('express');

const userModel = require("./users");


var router = express.Router();
router.get("/", (req, res) => {
  res.render("index");
});


router.get("/create", async (req, res) => {
  const createdUSer = await userModel.create({
    username: "chintu",
    age: 25,
    password: "q1w2e3r4t5"
  })
  res.send(createdUSer);
});

router.get("/allUsers", async (req, res) => {
  let allUser = await userModel.find();
  console.log(allUser);
  res.send(allUser);
})

router.get("/FindOne",async(req,res)=>{
    const findone = await userModel.findOne({username:"devendra"});
    console.log(findone);
    res.send(findone);
})

router.get("/FindAndDelete", async(req,res)=>{
     const findAndDelete = await userModel.findOneAndDelete({
      username:"chintu"
     });
     console.log(findAndDelete);
     res.send(findAndDelete);
})
module.exports = router;
