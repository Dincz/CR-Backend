const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "user",
        },
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        phone: {
            type: String,
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model("contact", contactSchema);
