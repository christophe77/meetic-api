import axios from 'axios';
import { readAsync } from '../storage';
import Config from '../types/config';

export const headers = {
	Authorization: '',
	Cookie: '',
	Accept:
		'application/json, text/plain, image/jpeg, image/png, image/webp, */*',
	'Accept-Encoding': 'gzip, deflate, br',
	'Accept-Language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
	Host: 'www.meetic.fr',
	Referer: 'https://www.meetic.fr/m/discover',
	'Sec-Fetch-Dest': 'empty',
	'Sec-Fetch-Mode': 'cors',
	'Sec-Fetch-Site': 'same-origin',
	'User-Agent':
		'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
};
export async function generateConfig(): Promise<Config> {
	const headersClone = { ...headers };
	headersClone.Authorization = await readAsync('auth');
	headersClone.Cookie = await readAsync('cookie');
	const config = {
		headers: headersClone,
	};
	return config;
}

export const axiosInstance = axios.create({
	baseURL: 'https://www.meetic.fr/apida/',
});
