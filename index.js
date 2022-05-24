const ejs = require("pug")
const port = 27017

const express= require("express")
const userRouter = require("./routers/user")
const app = express()

app.set("view engine", "pug")
app.use(userRouter)

app.all("*",(req, res)=>{
    res.send("home")
})



const start = async () =>{
    try{

        await require("mongoose").connect("mongodb://127.0.0.1:27017")
        app.listen(port, ()=>{
            console.log(`Listening to port no ${port}`)
        });

    }catch(error){
        console.log(error)
    }
    
}

start()
