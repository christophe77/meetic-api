"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getVisits_1 = __importDefault(require("./getVisits"));
const postSwipeNo_1 = __importDefault(require("./postSwipeNo"));
const postSwipeYes_1 = __importDefault(require("./postSwipeYes"));
const interactions = {
    getVisits: getVisits_1.default,
    postSwipeNo: postSwipeNo_1.default,
    postSwipeYes: postSwipeYes_1.default
};
exports.default = interactions;
