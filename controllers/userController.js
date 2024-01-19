const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");
const mongoose = require("mongoose");

const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find();
    res.status(200).json({
        users,
    });
});

const getUser = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const targetUser = await User.findById(id);
    if (!targetUser) {
        res.status(404);
        throw new Error("User Not Found!");
    }
    res.status(200).json({ targetUser });
});

const addUser = asyncHandler((req, res) => {
    const { name, email, phone, goodsTransporting, deliveryRoute } = req.body;
    if (!name || !email || !phone || !goodsTransporting || !deliveryRoute) {
        res.status(404);
        throw new Error("Insufficient Information Provided!");
    }
    User.create({
        name,
        email,
        phone,
        goodsTransporting,
        deliveryRoute,
    });
    res.status(201).json({
        msg: "User Added!",
    });
});

const updateUser = asyncHandler(async (req, res) => {
    const { name, email, phone, goodsTransporting, deliveryRoute } = req.body;
    if (!name || !email || !phone || !goodsTransporting || !deliveryRoute) {
        res.status(404);
        throw new Error("Insufficient Information!");
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json({
        msg: "User Updated!",
        UserInfo: updatedUser,
    });
});

const deleteUser = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const deletedUser = await User.findById(id);
    if (!deletedUser) {
        res.status(404);
        throw new Error("User Not Found");
    }
    await deletedUser.deleteOne();
    res.status(200).json(deletedUser);
});

module.exports = {
    getAllUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser,
};
