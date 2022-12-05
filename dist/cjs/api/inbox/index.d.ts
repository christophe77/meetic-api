declare const inbox: {
    getMessages: () => Promise<import("../../types/inbox").Message[]>;
};
export default inbox;
