const userRoutes = require("../controllers/userController");
const express = require("express");

const router = express.Router();

router.route("/users/").get(userRoutes.getAllUsers).post(userRoutes.addUser);

router
    .route("/users/:id")
    .get(userRoutes.getUser)
    .put(userRoutes.updateUser)
    .delete(userRoutes.deleteUser);

module.exports = router;