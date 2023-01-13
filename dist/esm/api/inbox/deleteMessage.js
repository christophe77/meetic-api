import { axiosInstance, generateConfig } from '../axiosInstance';
const deleteMessage = async (aboId) => {
    try {
        const config = await generateConfig();
        const resp = await axiosInstance.delete(`inbox/threads/${aboId}`, config);
        return resp ? true : false;
    }
    catch (error) {
        console.log(error);
        return false;
    }
};
export default deleteMessage;
