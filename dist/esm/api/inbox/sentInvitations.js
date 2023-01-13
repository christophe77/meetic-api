import { axiosInstance, generateConfig } from '../axiosInstance';
const sentInvitations = async () => {
    var _a;
    try {
        const config = await generateConfig();
        const resp = await axiosInstance.get(`inbox/threads/invitations/sent?include=profile(),pictures(full,medium,little,four_fifth,thumb_blurred),right(anonymous),online,mutual_match,interactions,blacklist&limit=50`, config);
        return resp.data;
    }
    catch (error) {
        return ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) || 'error';
    }
};
export default sentInvitations;
