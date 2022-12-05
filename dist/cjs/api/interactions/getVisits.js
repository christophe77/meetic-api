"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axiosInstance_1 = require("../axiosInstance");
const getVisits = async () => {
    var _a;
    try {
        const config = (0, axiosInstance_1.generateConfig)();
        const resp = await axiosInstance_1.axiosInstance.get(`interactions?with_format_picture=medium_blurred%2Cfull%2Clittle%2Cmedium%2Cfour_fifth&include=members%2Cinteractions&direction=received&list=visits&page=1&per_page=30&scam=0`, config);
        return resp.data;
    }
    catch (error) {
        return ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) || 'error';
    }
};
exports.default = getVisits;
