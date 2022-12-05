"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.read = exports.write = void 0;
const key_file_storage_1 = __importDefault(require("key-file-storage"));
const kfs = (0, key_file_storage_1.default)('/storage/meetic', false);
function write(key, value) {
    kfs[key] = value;
}
exports.write = write;
function read(key) {
    return kfs[key];
}
exports.read = read;
