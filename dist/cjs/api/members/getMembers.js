"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axiosInstance_1 = require("../axiosInstance");
const getMembers = async () => {
    var _a;
    try {
        const config = (0, axiosInstance_1.generateConfig)();
        const resp = await axiosInstance_1.axiosInstance.get(`members/infinite?excluded_members=&include=profile(city),pictures(full),album_pictures(full),announce,online,is_potentially_mutual,last_connection_date,similarities,thematic_announces,reflist,right(premium),compatibility,should_display_nudge_to_init_layer,audios,verified_profile&limit=100`, config);
        return resp.data;
    }
    catch (error) {
        return ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) || 'error';
    }
};
exports.default = getMembers;
