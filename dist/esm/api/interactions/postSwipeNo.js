import { axiosInstance, generateConfig } from '../axiosInstance';
const postSwipeNo = async (aboid) => {
    var _a;
    try {
        const config = await generateConfig();
        const resp = await axiosInstance.post(`interactions`, {
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
export default postSwipeNo;
