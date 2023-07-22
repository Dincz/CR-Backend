const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const { constants } = require("../constants");
const { regSchema, logSchema } = require("../validator/userSchema");
// desc Register a user
// route POST/api/users/register
// access public
const registerUser = asyncHandler(async (req, res) => {
    const result = await regSchema.validateAsync(req.body);
    const userAvailable = await User.findOne({ email: result.email });
    if (userAvailable) {
        throw new Error(constants.VALIDATION_ERROR);
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(result.password, 10);
    console.log("Hashed Password:", hashedPassword);
    const user = await User.create({
        username: result.username,
        email: result.email,
        password: hashedPassword,
    });

    console.log(`User created ${user}`);
    if (user) {
        res.status(201).json({ _id: user.id, email: user.email });
    } else {
        throw new Error(constants.VALIDATION_ERROR);
    }
    res.json({ message: "Register the User" });
});

// desc login user
// route POST/api/users/login
// access public
const loginUser = asyncHandler(async (req, res) => {
    const result = await logSchema.validateAsync(req.body);
    const user = await User.findOne({ email: result.email });
    // compare password with hashed password
    if (user && (await bcrypt.compare(result.password, user.password))) {
        const accesstoken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id,
            },
        }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.EXPIREIN });
        res.status(constants.SUCCESSFUL_REQUEST).json({ accesstoken });
        // might be error in converting string refer busticket later
    } else {
        throw new Error(constants.UNAUTHORIZED);
    }
});

// desc current user info
// route POST/api/users/current
// access private
const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };
