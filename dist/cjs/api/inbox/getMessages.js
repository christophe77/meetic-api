"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axiosInstance_1 = require("../axiosInstance");
const getMessages = async () => {
    var _a;
    try {
        const config = (0, axiosInstance_1.generateConfig)();
        const resp = await axiosInstance_1.axiosInstance.get(`inbox/threads/trustzone?limit=50&include=profile(city),pictures(medium),online,mutual_match,announce,right(premium,anonymous),blacklist`, config);
        return resp.data;
    }
    catch (error) {
        return ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) || 'error';
    }
};
exports.default = getMessages;
