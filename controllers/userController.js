const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const { constants } = require("../constants");
// desc Register a user
// route POST/api/users/register
// access public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        throw new Error(constants.VALIDATION_ERROR);
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        throw new Error(constants.VALIDATION_ERROR);
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password:", hashedPassword);
    const user = await User.create({
        username,
        email,
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
    const { email, password } = req.body;
    if (!email || !password) {
        throw new Error(constants.VALIDATION_ERROR);
    }
    const user = await User.findOne({ email });
    // compare password with hashed password
    if (user && (await bcrypt.compare(password, user.password))) {
        const accesstoken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id,
            },
        }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
        res.status(200).json({ accesstoken });
    } else {
        throw new Error(constants.UNATHORIZED);
    }
});

// desc current user info
// route POST/api/users/current
// access private
const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };
