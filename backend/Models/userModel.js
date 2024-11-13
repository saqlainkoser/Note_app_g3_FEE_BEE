const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://saqlainkoser:^vvrulc2q@noteapp.ht0lc.mongodb.net/?retryWrites=true&w=majority&appName=Noteapp")

const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    email: String,
    password: String,
    date:{
        type:Date,
        default:Date.now
    }
    })

mongoose.model('User_g4',userSchema);

module.exports = mongoose.model('User_g4')