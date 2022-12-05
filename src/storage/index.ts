import keyFileStorage from 'key-file-storage';

const kfs = keyFileStorage('/storage/meetic', false);

export function write(key: string, value: string) {
	kfs[key] = value;
}
export function read(key: string) {
	return kfs[key];
}
