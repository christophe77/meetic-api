declare const interactions: {
    getVisits: () => Promise<import("../../types/interactions").Visits>;
    postSwipeNo: (aboid: number) => Promise<string>;
    postSwipeYes: (aboid: number) => Promise<string>;
};
export default interactions;
