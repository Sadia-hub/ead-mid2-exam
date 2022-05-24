const express= require("express")
const {
    register_page,
    update_page,
    users_page,


    register_user,
    update_user,
    delete_user,
    get_users
} = require("../controllers/user")
const router = express.Router();


//pages
router.route("/").get(register_page).post(register_user)
router.route("/update").get(update_page)
router.route("/users").get(users_page)

router.get("/delete/:id",delete_user)

module.exports = router