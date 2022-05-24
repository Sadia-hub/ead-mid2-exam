const ejs = require("pug")
const port = 27017
const multer = require("multer")
const fileStorage = require("./middleware")
const path = require("path")

const express= require("express")
const userRouter = require("./routers/user")
const app = express()

app.set("view engine", "pug")

app.use(express.static(path.resolve("./images")))
app.use("/",multer({
    storage:fileStorage
}).single("image"))


app.use(express.urlencoded({extended:true}))
app.use(userRouter)

app.all("*",(req, res)=>{
    res.send("Page Not Found")
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
