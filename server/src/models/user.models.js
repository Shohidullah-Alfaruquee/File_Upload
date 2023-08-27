const mongoose = require('mongoose');

const Schema = mongoose.Schema();

const UserSchema = new Schema({
    name: {
        type:String,
        require: [true, "Name is required"]
    },
    email: {
        type:String,
        required: [true, "email is required"]
    },
    image:{
        type:String,
        default: "default.png"
    }

})


const Peoples = mongoose.model("People", UserSchema);

module.exports = {
    Peoples
}