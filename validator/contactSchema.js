const Joi = require("joi");

const contactSchema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    email: Joi.string()
        .min(3)
        .max(12)
        .email()
        .required(),
    phone: Joi.string()
        .pattern(/^[0-9]{10}$/)
        .message("Phone number must be a 10-digit number"),
});

module.exports = { contactSchema };
