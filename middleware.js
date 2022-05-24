const multer =require("multer")

const fileStorage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, "./images")
    },
    filename:(req, file, cb)=>{
        cb(null, Date.now()+"_"+file.originalname)
    }
})

module.exports = fileStorage;