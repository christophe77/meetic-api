import { axiosInstance, generateConfig } from '../axiosInstance';
import { PostSwipeNo } from '../../types/interactions';

const postSwipeNo = async (aboid: number): Promise<PostSwipeNo> => {
	try {
		const config = await generateConfig();
		const resp = await axiosInstance.post(
			`interactions`,
			{
				interactions: {
					type: 'profileswipe',
					links: { receiver: aboid },
					rate_status: 'no',
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

export default postSwipeNo;
