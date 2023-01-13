import getMessages from './getMessages';
import postMessage from './postMessage';
import sentInvitations from './sentInvitations';
import deleteMessage from './deleteMessage'

const inbox = {
	getMessages,
	postMessage,
	sentInvitations,
	deleteMessage
};

export default inbox;
