import login from './login/login';
declare const meeticApi: {
    login: typeof login;
    interactions: {
        getVisits: () => Promise<import("./types/interactions").Visits>;
        postSwipeNo: (aboid: number) => Promise<string>;
        postSwipeYes: (aboid: number) => Promise<string>;
    };
    members: {
        getMembers: () => Promise<import("./types/members").Member[]>;
        getProfile: (aboid: number) => Promise<import("./types/members").Member>;
        getMe: () => Promise<import("./types/members").Me>;
        getSearch: (criterias: import("./types/members").Criterias) => Promise<import("./types/members").Member[]>;
    };
};
export default meeticApi;
