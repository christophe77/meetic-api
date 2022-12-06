import { axiosInstance, generateConfig } from '../axiosInstance';
import { Member } from '../../types/members';

const getProfile = async (aboid: number): Promise<Member> => {
	try {
		const config = await generateConfig();
		const resp = await axiosInstance.get(
			`members/${aboid}/full?include=profile(city),pictures(full,little,medium,medium_blurred,four_fifth,square_medium_x1,square_xsmall_x1,square_small_x1,square_small_x2,square_small_x3,square_medium_x3,square_small_x1_blurred),announce,online,album_pictures(full,little,medium,medium_blurred,four_fifth,square_medium_x1,square_xsmall_x1,square_small_x1,square_small_x2,square_small_x3,square_medium_x3,square_small_x1_blurred),interactions,is_potentially_mutual,last_connection_date,similarities,reflist,thematic_announces,mutual_match,right(premium),interests,compatibility,audios,has_exchanged_super_message,verified_profile`,
			config,
		);
		return resp.data;
	} catch (error: any) {
		return error.response?.status || 'error';
	}
};

export default getProfile;
