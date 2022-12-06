import { axiosInstance, generateConfig } from '../axiosInstance';
import { Me } from '../../types/members';

const getMe = async (): Promise<Me> => {
	try {
		const config = await generateConfig();
		const resp = await axiosInstance.get(
			`members/me?with_format_picture=full,little,profile_page_large,thumb_blurred,medium,square_xsmall_x1,square_small_x1_blurred,square_small_x1,square_small_x2,square_small_x3,square_medium_x3`,
			config,
		);
		return resp.data;
	} catch (error: any) {
		return error.response?.status || 'error';
	}
};

export default getMe;
