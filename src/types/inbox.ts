export type Message = {
	thread_id: string;
	unread_message_count: number;
	is_read: boolean;
	is_super_message: boolean;
	is_your_turn: boolean;
	is_mutual: boolean;
	is_blacklisted: boolean;
	last_message: {
		id: number;
		content: string;
		type: string;
		sender_id: number;
		direction: string;
		read: boolean;
		date: string;
	};
	profile: {
		aboid: number;
		nickname: string;
		age: number;
		gender: 'F' | 'M';
		kvk: string;
		scam_status: string;
		status: string;
		deactivation_reason: string;
		geo: { city: { name: string } };
		announce: any;
		pictures: {
			id: string;
			type: string;
			is_main: boolean;
			links: {
				medium: {
					href: string;
				};
				self: {
					href: string;
				};
			};
		}[];

		online: boolean;
		right: { is_anonymous: boolean; is_premium: boolean };
	};
};
export type Messages = {
	results: Message[];

	meta: {
		offset: number;
		limit: number;
		count: number;
		total: number;
		links: null;
	};
};
export type PostMessage = {
	id: string;
	thread_id: string;
	harassment: boolean | null;
	sender_thread_id: string;
	receiver_thread_id: string;
};
