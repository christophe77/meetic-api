"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_1 = __importDefault(require("./login/login"));
const interactions_1 = __importDefault(require("./api/interactions"));
const members_1 = __importDefault(require("./api/members"));
const meeticApi = {
    login: login_1.default,
    interactions: interactions_1.default,
    members: members_1.default,
};
exports.default = meeticApi;
