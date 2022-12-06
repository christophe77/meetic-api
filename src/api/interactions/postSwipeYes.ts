import { axiosInstance, generateConfig } from '../axiosInstance';
import { PostSwipeYes } from '../../types/interactions';

const postSwipeYes = async (aboid: number): Promise<PostSwipeYes> => {
	try {
		const config = await generateConfig();
		const resp = await axiosInstance.post(
			`interactions`,
			{
				interactions: {
					type: 'profileswipe',
					links: { receiver: aboid },
					rate_status: 'yes',
				},
				meta: { origin: 'INFINITE' },
			},
			config,
		);
		return resp.data;
	} catch (error: any) {
		return error.response?.status || 'error';
	}
};

export default postSwipeYes;
