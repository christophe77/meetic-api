import { axiosInstance, generateConfig } from '../axiosInstance';
import { Messages } from '../../types/inbox';

const getMessages = async (): Promise<Messages> => {
	try {
		const config = await generateConfig();
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
