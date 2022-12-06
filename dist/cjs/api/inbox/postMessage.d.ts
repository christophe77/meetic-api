import { PostMessage } from '../../types/inbox';
declare const postMessage: (aboid: number, message: string) => Promise<PostMessage>;
export default postMessage;
