import { axiosInstance, generateConfig } from '../axiosInstance';
const getMembers = async () => {
    var _a;
    try {
        const config = await generateConfig();
        const resp = await axiosInstance.get(`members/infinite?excluded_members=&include=profile(city),pictures(full,little,medium,four_fifth,medium_blurred,square_medium_x2,square_medium_x3),album_pictures(full,little,medium,four_fifth,medium_blurred,square_medium_x2,square_medium_x3),announce,online,is_potentially_mutual,last_connection_date,similarities,thematic_announces,reflist,right(premium),compatibility,should_display_nudge_to_init_layer,audios,verified_profile&limit=100`, config);
        return resp.data;
    }
    catch (error) {
        return ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) || 'error';
    }
};
export default getMembers;
