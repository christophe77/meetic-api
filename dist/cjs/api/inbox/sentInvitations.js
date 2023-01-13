"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axiosInstance_1 = require("../axiosInstance");
const sentInvitations = async () => {
    var _a;
    try {
        const config = await (0, axiosInstance_1.generateConfig)();
        const resp = await axiosInstance_1.axiosInstance.get(`inbox/threads/invitations/sent?include=profile(),pictures(full,medium,little,four_fifth,thumb_blurred),right(anonymous),online,mutual_match,interactions,blacklist&limit=50`, config);
        return resp.data;
    }
    catch (error) {
        return ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) || 'error';
    }
};
exports.default = sentInvitations;
