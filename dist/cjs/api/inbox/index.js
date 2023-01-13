"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getMessages_1 = __importDefault(require("./getMessages"));
const postMessage_1 = __importDefault(require("./postMessage"));
const sentInvitations_1 = __importDefault(require("./sentInvitations"));
const deleteMessage_1 = __importDefault(require("./deleteMessage"));
const inbox = {
    getMessages: getMessages_1.default,
    postMessage: postMessage_1.default,
    sentInvitations: sentInvitations_1.default,
    deleteMessage: deleteMessage_1.default
};
exports.default = inbox;
