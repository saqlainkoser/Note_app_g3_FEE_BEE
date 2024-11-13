var express = require('express');
var router = express.Router();

var User = require("../Models/userModel.js")
let secret = "mysceretcode"


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', async (req, res) => {
  let { username, name, email, password } = req.body;
  //step - 1 checking email
  let emailCon = await User.findOne({ email });
  if (emailCon) {
    return res.json({
      message: "Email already Exists"
    })
  }
  else{
    //new data 
    var bcrypt = require('bcryptjs')
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(password, salt,async function(err, hash) {
          let user = await User.create({
            username,
            name,
            email,
            password:hash
          })
          let jwt = require('jsonwebtoken');
          let token = jwt.sign({userId : user._id , email:user.email},secret)

          res.json({
            success:true,
            userId:user._id,
            message:"User created Successfully",
            token:token
          })

      
      });
  });
  }

})

router.post("/login",async (req,res)=>{
  let {email,password} = req.body;
  //fetching data from database
  let user = await User.findOne({email})

  if(user){
    const bcrypt = require("bcryptjs");
    bcrypt.compare(password,user.password,async function(err,result){
      if(result){
        const jwt = require("jsonwebtoken");
        let token=jwt.sign({userId:user._id,email:user.email},secret);
        //ack
        res.json({
          success:true,
          userId:user._id,
          message:"User logged in Successfully",
          token:token
        })
      }
      else{
        res.json({
          success:false,
          message:"Invalid password"
        })
      }
    })

  }
  else{
    return res.json({
      success:false,
      message:"Invalid email , User Not Exists !"
    })
  }
})


module.exports = router;
