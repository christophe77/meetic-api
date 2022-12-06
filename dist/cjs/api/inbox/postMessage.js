"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axiosInstance_1 = require("../axiosInstance");
const postMessage = async (aboid, message) => {
    var _a;
    try {
        const creationDate = new Date().toISOString();
        const config = await (0, axiosInstance_1.generateConfig)();
        const resp = await axiosInstance_1.axiosInstance.post(`inbox/messages`, {
            messages: {
                channel: 'mail',
                id: null,
                content: message,
                creationDate,
                direction: 'sent',
                links: { receiver: { id: aboid } },
                type: 'text',
            },
            meta: { origin: 'PFP' },
        }, config);
        return resp.data;
    }
    catch (error) {
        return ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) || 'error';
    }
};
exports.default = postMessage;
