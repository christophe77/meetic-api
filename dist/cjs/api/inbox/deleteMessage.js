"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axiosInstance_1 = require("../axiosInstance");
const deleteMessage = async (aboId) => {
    try {
        const config = await (0, axiosInstance_1.generateConfig)();
        const resp = await axiosInstance_1.axiosInstance.delete(`inbox/threads/${aboId}`, config);
        return resp ? true : false;
    }
    catch (error) {
        console.log(error);
        return false;
    }
};
exports.default = deleteMessage;
