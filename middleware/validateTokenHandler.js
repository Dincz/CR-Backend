/* eslint-disable consistent-return */
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    const authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
        // eslint-disable-next-line prefer-destructuring
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                res.status(401);
                return res.json({ error: "User is not authorized" });
            }
            req.user = decoded.user;
            next();
        });
        if (!token) {
            res.status(401);
            return res.json({ error: "User is not authorized or token is missing" });
        }
    }
});

module.exports = validateToken;
