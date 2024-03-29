declare const inbox: {
    getMessages: () => Promise<import("../../types/inbox").Messages>;
    postMessage: (aboid: number, message: string) => Promise<import("../../types/inbox").PostMessage>;
    sentInvitations: () => Promise<import("../../types/inbox").Messages>;
    deleteMessage: (aboId: number) => Promise<boolean>;
};
export default inbox;
