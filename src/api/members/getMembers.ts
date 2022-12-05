import { axiosInstance, generateConfig } from '../axiosInstance';
import { Member } from '../../types/members';

const getMembers = async (): Promise<Member[]> => {
	try {
		const config = generateConfig();
		const resp = await axiosInstance.get(
			`members/infinite?excluded_members=&include=profile(city),pictures(full),album_pictures(full),announce,online,is_potentially_mutual,last_connection_date,similarities,thematic_announces,reflist,right(premium),compatibility,should_display_nudge_to_init_layer,audios,verified_profile&limit=100`,
			config,
		);
		return resp.data;
	} catch (error: any) {
		return error.response?.status || 'error';
	}
};

export default getMembers;
