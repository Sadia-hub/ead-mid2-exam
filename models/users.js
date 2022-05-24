const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    image:{
        type:String,
        required:[true,"Image is required"]
    },
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    number:{
        type:String,
        required:[true,"Number is required"]
    },
    state:{
        type:String,
        required:[true,"State is required"]
    },
    address:{
        type:String,
        required:[true,"Address is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"]
    },
    country:{
        type:String,
        required:[true,"Country is required"]
    },
    city:{
        type:String,
        required:[true,"City is required"]
    },
    zip:{
        type:String,
        required:[true,"Zip is required"]
    }
    
})

module.exports=mongoose.model("user",userSchema)