import { StringAttribute, RangeAttribute, FieldAttribute } from './common';

export type Member = {
	member: {
		aboid: number;
		nickname: string;
		age: number;
		gender: 'M' | 'F';
		status: string;
		deactivation_reason: string;
		geo: {
			city: { name: string };
			latitude: number;
			longitude: number;
			distance: number;
			unit: string;
		};
		pictures: {
			id: string;
			type: string;
			is_main: boolean;
			links: {
				full: {
					href: string;
				};
				self: {
					href: string;
				};
			};
		}[];

		audios: { prompts: string[] };
		is_verified_profile: boolean;
		online: boolean;
		announce: {
			value: string;
			headline: string;
		};
		thematic_announces: {
			type: number;
			value: string;
		}[];

		is_potentially_mutual: boolean;
		is_mutual: boolean;
		profile: {
			religion: StringAttribute;
			marital_status: StringAttribute;
			has_children: StringAttribute;
			children_wish: StringAttribute;
			studies: StringAttribute;
			relation_type: StringAttribute;
			language: StringAttribute;
			astrological_sign: StringAttribute;
			hobbies: StringAttribute;
			sports: StringAttribute;
			smoker: StringAttribute;
			height: StringAttribute;
			body_shape: StringAttribute;
			hair_color: StringAttribute;
			hair_style: StringAttribute;
			eyes: StringAttribute;
			ethnicity: StringAttribute;
			gender_identity: StringAttribute;
		};
		search: {
			has_children: StringAttribute;
			children_wish: StringAttribute;
			studies: StringAttribute;
			hobbies: StringAttribute;
			smoker: StringAttribute;
			height: StringAttribute;
			body_shape: StringAttribute;
			living_style: StringAttribute;
			age: StringAttribute;
		};
		is_premium_display_only: boolean;
		similarities: FieldAttribute;

		compatibility: {
			percentage: number;
			criterias: FieldAttribute;
		};
		last_connection_date: string;
		interests: { type: 'videocall' | 'audiocall' | ''; value: true }[];

		has_exchanged_super_message: boolean;
	};
	meta: { is_eligible: boolean; total: number };
};

export type Me = {
	members: {
		aboid: number;
		nickname: string;
		age: number;
		gender: 'M' | 'F';
		status: string;
		deactivation_reason: string;
		pictures: {
			id: string;
			type: string;
			is_main: boolean;
			links: {
				full: {
					href: string;
					format: string;
				};
				self: {
					href: string;
					format: string;
				};
			};
			is_valid: boolean;
			has_selfie_verification: boolean;
			creation_date: string;
			moderation_in_progress: boolean;
		}[];
		audios: {
			prompts: {
				id: string;
				type: string;
				duration: number;
				status: string;
				creation_date: string;
			}[];
		};
		is_verified_profile: boolean;
		announce: {
			value: string;
			headline: string;
			valid: boolean;
		};
		thematic_announces: { type: number; value: string; valid: boolean }[];

		profile: {
			religion: StringAttribute;
			religion_behaviour: StringAttribute;
			nationality: StringAttribute;
			marital_status: StringAttribute;
			live_with: StringAttribute;
			has_children: StringAttribute;
			children_wish: StringAttribute;
			studies: StringAttribute;
			job: StringAttribute;
			income: StringAttribute;
			relation_type: StringAttribute;
			language: StringAttribute;
			astrological_sign: StringAttribute;
			music: StringAttribute;
			movie: StringAttribute;
			pet: StringAttribute;
			hobbies: StringAttribute;
			leisure: StringAttribute;
			sports: StringAttribute;
			smoker: StringAttribute;
			food_habit: StringAttribute;
			look: StringAttribute;
			height: StringAttribute;
			weight: StringAttribute;
			body_shape: StringAttribute;
			hair_color: StringAttribute;
			hair_style: StringAttribute;
			eyes: StringAttribute;
			ethnicity: StringAttribute;
			living_style: StringAttribute;
			attraction: StringAttribute;
			temper: StringAttribute;
			romantic: StringAttribute;
			marriage: StringAttribute;
			gender_identity: StringAttribute;
			imperfection: StringAttribute;
			age: StringAttribute;
			gender: 'M' | 'F';
		};
		search: {
			religion: StringAttribute;
			religion_behaviour: StringAttribute;
			marital_status: StringAttribute;
			has_children: StringAttribute;
			children_wish: StringAttribute;
			language: StringAttribute;
			smoker: StringAttribute;
			food_habit: StringAttribute;
			look: StringAttribute;
			height: RangeAttribute;
			weight: RangeAttribute;
			body_shape: StringAttribute;
			hair_color: StringAttribute;
			hair_style: StringAttribute;
			eyes: StringAttribute;
			ethnicity: StringAttribute;
			living_style: StringAttribute;
			temper: StringAttribute;
			marriage: StringAttribute;
			age: RangeAttribute;
			gender: 'M' | 'F';
		};
		is_premium_display_only: boolean;
		songs: { favorite: { id: string; type: string } };
		interests: { type: 'audiocall' | 'videocall'; value: boolean }[];

		picture_count: number;
		efficiency: { has_sent_favorite: boolean };
		birth_date: string;
		inscription_date: string;
		has_recently_registered: boolean;
		is_gender_change_eligible: boolean;
		links: any;
		is_photo_mandatory_eligible: boolean;
		geo: {
			latitude: number;
			longitude: number;
			city: { name: string; normalized_name: string };
			country: { iso_code: string; name: string };
			region: { name: string };
			place: { zipcode: string };
		};
		verified_profile_status: string;
	};
};

export type Criterias = {
	hasPicture: boolean;
	fromAge: number;
	toAge: number;
	city: string;
	distance: number;
};
