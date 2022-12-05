import { axiosInstance, generateConfig } from '../axiosInstance';
import { Visits } from '../../types/interactions';

const getVisits = async (): Promise<Visits> => {
	try {
		const config = generateConfig();
		const resp = await axiosInstance.get(
			`interactions?with_format_picture=medium_blurred%2Cfull%2Clittle%2Cmedium%2Cfour_fifth&include=members%2Cinteractions&direction=received&list=visits&page=1&per_page=30&scam=0`,
			config,
		);
		return resp.data;
	} catch (error: any) {
		return error.response?.status || 'error';
	}
};

export default getVisits;
