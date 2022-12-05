import { axiosInstance, generateConfig } from '../axiosInstance';
const getMe = async () => {
    var _a;
    try {
        const config = generateConfig();
        const resp = await axiosInstance.get(`members/me?with_format_picture=full`, config);
        return resp.data;
    }
    catch (error) {
        return ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) || 'error';
    }
};
export default getMe;
