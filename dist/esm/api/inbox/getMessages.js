import { axiosInstance, generateConfig } from '../axiosInstance';
const getMessages = async () => {
    var _a;
    try {
        const config = await generateConfig();
        const resp = await axiosInstance.get(`inbox/threads/trustzone?limit=50&include=profile(city),pictures(medium),online,mutual_match,announce,right(premium,anonymous),blacklist`, config);
        return resp.data;
    }
    catch (error) {
        return ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) || 'error';
    }
};
export default getMessages;
