import { axiosInstance, generateConfig } from '../axiosInstance';
import { Message } from '../../types/inbox';

const getMessages = async (): Promise<Message[]> => {
	try {
		const config = generateConfig();
		const resp = await axiosInstance.get(
			`inbox/threads/trustzone?limit=50&include=profile(city),pictures(medium),online,mutual_match,announce,right(premium,anonymous),blacklist`,
			config,
		);
		return resp.data;
	} catch (error: any) {
		return error.response?.status || 'error';
	}
};

export default getMessages;
