"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axiosInstance_1 = require("../axiosInstance");
const postSwipeNo = async (aboid) => {
    var _a;
    try {
        const config = await (0, axiosInstance_1.generateConfig)();
        const resp = await axiosInstance_1.axiosInstance.post(`interactions`, {
            interactions: {
                type: 'profileswipe',
                links: { receiver: aboid },
                rate_status: 'no',
            },
            meta: { origin: 'INFINITE' },
        }, config);
        return resp.data;
    }
    catch (error) {
        return ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) || 'error';
    }
};
exports.default = postSwipeNo;
