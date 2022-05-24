const userModel = require("../models/users")

const register_page=(req, res)=>{
    res.render("register",{})
}

const update_page=(req, res)=>{
    res.render("update",{})
}

const users_page = (req, res) =>{
    res.render("users",{})
}



const register_user = async (req, res) =>{

    try{
        const user = await userModel.create(req.body)
        res.redirect("/")
    }catch(error){
        console.log(error)
    }
    res.send("insert")
}

const get_users =(req, res) =>{
    try{

    }catch(error){

    }
    res.send("users")
}

const update_user=(req, res) =>{
    try{

    }catch(error){

    }
    res.send("update")
}

const delete_user =(req, res) =>{
    try{

    }catch(error){

    }
    res.send("delete")
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