/* eslint-disable consistent-return */
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { constants } = require("../constants");

const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    const authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
        // eslint-disable-next-line prefer-destructuring
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                throw new Error(constants.UNAUTHORIZED);
            }
            req.user = decoded.user;
            next();
        });
        if (!token) {
            throw new Error(constants.UNAUTHORIZED);
        }
    }
});

module.exports = validateToken;
