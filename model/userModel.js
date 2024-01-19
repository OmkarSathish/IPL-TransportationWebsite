const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Provide User Name"],
        },
        email: {
            type: String,
            required: [true, "Provide User Email"],
        },
        phone: {
            type: String,
            required: [true, "Provide Phone Number"],
        },
        goodsTransporting: {
            type: [String],
            required: [true, "Provide the names of Goods being Transported"],
        },
        deliveryRoute: {
            type: [String],
            required: [true, "Provide the landmarks"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);
