"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getMembers_1 = __importDefault(require("./getMembers"));
const getProfile_1 = __importDefault(require("./getProfile"));
const getMe_1 = __importDefault(require("./getMe"));
const getSearch_1 = __importDefault(require("./getSearch"));
const members = {
    getMembers: getMembers_1.default,
    getProfile: getProfile_1.default,
    getMe: getMe_1.default,
    getSearch: getSearch_1.default
};
exports.default = members;
