"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeAsync = exports.readAsync = exports.read = exports.write = exports.init = void 0;
const key_file_storage_1 = __importDefault(require("key-file-storage"));
const kfs = (0, key_file_storage_1.default)('/storage/meetic', false);
function init() {
    delete kfs['*'];
    kfs['auth'] = '';
    kfs['cookie'] = '';
}
exports.init = init;
function write(key, value) {
    kfs[key] = value;
}
exports.write = write;
function read(key) {
    return kfs[key];
}
exports.read = read;
async function readAsync(key) {
    return await kfs(key);
}
exports.readAsync = readAsync;
async function writeAsync(key, value) {
    await kfs(key, value);
}
exports.writeAsync = writeAsync;
