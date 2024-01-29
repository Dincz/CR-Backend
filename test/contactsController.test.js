/* eslint-disable no-unused-expressions */
// test/contactsController.test.js
const sinon = require("sinon");
const chai = require("chai");

const {
    describe, it, beforeEach, afterEach,
} = require("mocha");
const { constants } = require("../constants");
const Contact = require("../models/contactModel");
const { getContacts } = require("../controllers/contactController");

const { expect } = chai;

describe("getContacts", () => {
    let contactMock;

    beforeEach(() => {
        // Create a new mock instance before each test
        contactMock = sinon.mock(Contact);
    });

    afterEach(() => {
        // Restore the mock after each test
        contactMock.restore();
    });

    it("should return contacts for a user", async () => {
        const userId = "12345";
        const req = { user: { id: userId } };
        const res = {
            status: sinon.stub().returnsThis(),
            json: sinon.spy(),
        };

        // Mock the Contact.find() function using sinon-mongoose
        contactMock.expects("find")
            .withArgs({ userId })
            .resolves([{ name: "John Doe", email: "john@example.com" }]); // Removed .chain("exec")

        // Call the function being tested
        await getContacts(req, res);

        // Assertions
        expect(res.status.calledOnce).to.be.true;
        expect(res.status.calledWith(constants.SUCCESSFUL_REQUEST)).to.be.true;
        expect(res.json.calledOnce).to.be.true;
        expect(res.json.calledWith([{ name: "John Doe", email: "john@example.com" }])).to.be.true;
    });
});
