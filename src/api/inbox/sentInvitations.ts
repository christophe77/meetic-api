import { axiosInstance, generateConfig } from '../axiosInstance';
import { Message } from '../../types/inbox';

const sentInvitations = async (): Promise<Message[]> => {
	try {
		const config = await generateConfig();
		const resp = await axiosInstance.get(
			`inbox/threads/invitations/sent?include=profile(),pictures(full,medium,little,four_fifth,thumb_blurred),right(anonymous),online,mutual_match,interactions,blacklist&limit=50`,
			config,
		);
		return resp.data;
	} catch (error: any) {
		return error.response?.status || 'error';
	}
};

export default sentInvitations;
