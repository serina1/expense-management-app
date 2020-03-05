const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({

        firstname:{
            type:String 
        },

        lastname: {
            type: String
        },
        email: {
            type: String 
        }, 
        password: {
            type: String
        }
})

const User = mongoose.model("User", UserSchema);

module.exports = User;