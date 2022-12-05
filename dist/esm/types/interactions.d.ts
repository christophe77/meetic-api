export type Visits = {
    links: {
        'interactions.sender': {
            href: string;
            type: string;
        };
        'interactions.receiver': {
            href: string;
            type: string;
        };
    };
    interactions: {
        type: string;
        date: string;
        direction: string;
        id: string;
        links: {
            sender: number;
            receiver: number;
        };
    }[];
    meta: {
        origin: string;
        page: number;
        per_page: number;
        page_count: number;
        links: {
            self: string;
            first: string;
            last: string;
            previous: string;
            next: string;
        };
    };
};
export type PostSwipeNo = string;
export type PostSwipeYes = string;
