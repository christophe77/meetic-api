import { axiosInstance, generateConfig } from '../axiosInstance';
import { Visits } from '../../types/interactions';

const getVisits = async (): Promise<Visits> => {
	try {
		const config = await generateConfig();
		const resp = await axiosInstance.get(
			`interactions?with_format_picture=medium&include=members_interactions&direction=received&list=visits&page=1&per_page=30&scam=0`,
			config,
		);
		return resp.data;
	} catch (error: any) {
		return error.response?.status || 'error';
	}
};

export default getVisits;
