import keyFileStorage from 'key-file-storage';
const kfs = keyFileStorage('/storage/meetic', false);
export function write(key, value) {
    kfs[key] = value;
}
export function read(key) {
    return kfs[key];
}
