import { axiosInstance, generateConfig } from '../axiosInstance';
import { Member, Criterias } from '../../types/members';

const getSearch = async (criterias: Criterias): Promise<Member[]> => {
	const { hasPicture, fromAge, toAge, city, distance } = criterias;
	try {
		const config = await generateConfig();
		console.log("config", config)
		const resp = await axiosInstance.get(
			`members/search?include=profile(city),reflist,pictures(four_fifth),announce,online,last_connection_date,is_potentially_mutual,interactions,right(premium),similarities,compatibility,should_display_nudge_to_init_layer,audios,verified_profile,has_exchanged_super_message,&has_picture=${hasPicture}&from_age=${fromAge}&to_age=${toAge}&city=${city}&distance=${distance}&offset=0&limit=100`,
			config,
		);
		return resp.data;
	} catch (error: any) {
		return error.response?.status || 'error';
	}
};

export default getSearch;
