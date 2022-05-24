const userModel = require("../models/users")

const register_page=(req, res)=>{
    res.render("register",{})
}

const update_page=(req, res)=>{
    res.render("update",{})
}

const users_page = async (req, res) =>{
    try{
        const users  = await userModel.find({})
        if(users){
            console.log(users)
            return res.render("users",{users})
        }
    }catch(error){

    }
    res.send("users")
}



const register_user = async (req, res) =>{

    try{
        console.log({image:req.file.filename,...req.body})
        const user = await userModel.create({image:req.file.filename,...req.body})
        if(!user){
            return res.send("Error")
        }
        res.redirect("/")
        
    }catch(error){
        console.log(error)
    }
    
}

const get_users =async (req, res) =>{
    
}

const update_user=(req, res) =>{
    try{

    }catch(error){

    }
    res.send("update")
}

const delete_user =async (req, res) =>{
    try{
        const {id} = req.params
        const user = await userModel.findByIdAndDelete({_id:id})
        res.redirect("/users")
    }catch(error){

    }
    res.send("/users")
}





module.exports={
    register_page,
    update_page,
    users_page,


    register_user,
    update_user,
    delete_user,
    get_users
}