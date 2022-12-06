declare const inbox: {
    getMessages: () => Promise<import("../../types/inbox").Message[]>;
    postMessage: (aboid: number, message: string) => Promise<import("../../types/inbox").PostMessage>;
};
export default inbox;
