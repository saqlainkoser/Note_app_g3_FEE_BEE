var express = require('express');
var router = express.Router();
var User = require('../Models/userModel.js');


let secret = "mysecretkey"

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', async (req, res) => {
  const { username, name, email, password } = req.body;
  let emailCon = await User.findOne({ email });
  if (emailCon) {
    return res.json({
      message: "Email already exists"
    })
  }
  else {
    //encrypting password
    var bcrypt = require('bcryptjs');
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt,async function (err, hash) {
        //creating new data
        let user = await User.create({
          username,
          name,
          email,
          password: hash
        });

        var jwt = require('jsonwebtoken');
        var token = jwt.sign({ userId: user._id, email: user.email }, secret);

        res.json({
          success: true,
          userId: user._id,
          token: token,
          message: "User created successfully"
        })

      });
    })
  }})




    module.exports = router;
