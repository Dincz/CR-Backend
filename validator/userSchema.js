const Joi = require("joi");

const regSchema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .message("Minimum length is 3")
        .max(30)
        .required(),
    email: Joi.string()
        .min(3)
        .max(12)
        .email()
        .required(),
    password: Joi.string()
        .min(8)
        .max(30)
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/)
        .message("Password must be 8-30 characters long and include at least one uppercase letter, one lowercase letter, and one digit")
        .invalid("password", "123456", "helloworld"),
});

const logSchema = Joi.object({
    username: Joi.string(),
    email: Joi.required(),
    password: Joi.required(),
});

module.exports = { regSchema, logSchema };
