import keyFileStorage from 'key-file-storage';

const kfs = keyFileStorage('/storage/meetic', false);

export function init() {
	delete kfs['*'];
	kfs['auth'] = '';
	kfs['cookie'] = '';
}
export function write(key: string, value: string) {
	kfs[key] = value;
}
export function read(key: string) {
	return kfs[key];
}
export async function readAsync(key: string) {
	return await kfs(key);
}
export async function writeAsync(key: string, value:string) {
	await kfs(key, value);
}

