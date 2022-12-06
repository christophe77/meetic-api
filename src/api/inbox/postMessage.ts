import { axiosInstance, generateConfig } from '../axiosInstance';
import { PostMessage } from '../../types/inbox';

const postMessage = async (
	aboid: number,
	message: string,
): Promise<PostMessage> => {
	try {
        const creationDate = new Date().toISOString();
		const config = await generateConfig();
		const resp = await axiosInstance.post(
			`inbox/messages`,
			{
				messages: {
					channel: 'mail',
                    id: null,
					content: message,
                    creationDate,
					direction: 'sent',
					links: { receiver: { id: aboid } },
					type: 'text',
				},
				meta: { origin: 'PFP' },
			},
			config,
		);
		return resp.data;
	} catch (error: any) {
		return error.response?.status || 'error';
	}
};

export default postMessage;
