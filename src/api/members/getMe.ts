import { axiosInstance, generateConfig } from '../axiosInstance';
import { Me } from '../../types/members';

const getMe = async (): Promise<Me> => {
	try {
		const config = generateConfig();
		const resp = await axiosInstance.get(
			`members/me?with_format_picture=full`,
			config,
		);
		return resp.data;
	} catch (error: any) {
		return error.response?.status || 'error';
	}
};

export default getMe;
