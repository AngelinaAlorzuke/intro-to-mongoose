const {Schema, model} = require("mongoose")

const userSchema = new Schema({
   firstName:{
    type: String,
    required : true,
   },

   middleName : {
    type: String,
    required: false,
   },

   lastName : {
    type : String,
    required: true
   },
   
   email : {
    type: String,
    required: true
   },

   gender: {
    type: String,
    required: true,
   }
   
});

module.exports = model ("User", userSchema);