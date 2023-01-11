import { axiosInstance, generateConfig } from '../axiosInstance';
const postMessage = async (aboid, message) => {
    var _a;
    try {
        const creationDate = new Date().toISOString();
        const config = await generateConfig();
        const resp = await axiosInstance.post(`inbox/messages`, {
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
export default postMessage;
