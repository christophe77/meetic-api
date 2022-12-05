import { axiosInstance, generateConfig } from '../axiosInstance';
const getMe = async () => {
    var _a;
    try {
        const config = generateConfig();
        const resp = await axiosInstance.get(`members/me?with_format_picture=full,little,profile_page_large,thumb_blurred,medium,square_xsmall_x1,square_small_x1_blurred,square_small_x1,square_small_x2,square_small_x3,square_medium_x3`, config);
        return resp.data;
    }
    catch (error) {
        return ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) || 'error';
    }
};
export default getMe;
