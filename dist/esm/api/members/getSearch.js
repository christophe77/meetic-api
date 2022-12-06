import { axiosInstance, checkAuth, generateConfig } from '../axiosInstance';
const getSearch = async (criterias) => {
    var _a;
    const { hasPicture, fromAge, toAge, city, distance } = criterias;
    try {
        await checkAuth();
        const config = generateConfig();
        const resp = await axiosInstance.get(`members/search?include=profile(city),reflist,pictures(four_fifth),announce,online,last_connection_date,is_potentially_mutual,interactions,right(premium),similarities,compatibility,should_display_nudge_to_init_layer,audios,verified_profile,has_exchanged_super_message,&has_picture=${hasPicture}&from_age=${fromAge}&to_age=${toAge}&city=${city}&distance=${distance}&offset=0&limit=100`, config);
        return resp.data;
    }
    catch (error) {
        return ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) || 'error';
    }
};
export default getSearch;
