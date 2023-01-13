declare const members: {
    getMembers: () => Promise<import("../../types/members").Member[]>;
    getProfile: (aboid: number) => Promise<import("../../types/members").Member>;
    getMe: () => Promise<import("../../types/members").Me>;
    getSearch: (criterias: import("../../types/members").Criterias) => Promise<import("../../types/members").Member[]>;
    getMessages: () => Promise<import("../../types/inbox").Messages>;
};
export default members;
