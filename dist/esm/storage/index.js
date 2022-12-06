import keyFileStorage from 'key-file-storage';
const kfs = keyFileStorage('/storage/meetic', false);
export function init() {
    delete kfs['*'];
    kfs['auth'] = '';
    kfs['cookie'] = '';
}
export function write(key, value) {
    kfs[key] = value;
}
export function read(key) {
    return kfs[key];
}
export async function readAsync(key) {
    return await kfs(key);
}
