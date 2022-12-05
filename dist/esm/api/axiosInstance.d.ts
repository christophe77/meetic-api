import Config from '../types/config';
export declare const headers: {
    Authorization: string;
    Cookie: string;
    Accept: string;
    'Accept-Encoding': string;
    'Accept-Language': string;
    Host: string;
    Referer: string;
    'Sec-Fetch-Dest': string;
    'Sec-Fetch-Mode': string;
    'Sec-Fetch-Site': string;
    'User-Agent': string;
};
export declare function generateConfig(): Config;
export declare const axiosInstance: import("axios").AxiosInstance;
