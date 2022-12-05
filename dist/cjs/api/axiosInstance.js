"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.axiosInstance = exports.generateConfig = exports.headers = void 0;
const axios_1 = __importDefault(require("axios"));
const storage_1 = require("../storage");
exports.headers = {
    Authorization: '',
    Cookie: '',
    Accept: 'application/json, text/plain, image/jpeg, image/png, image/webp, */*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
    Host: 'www.meetic.fr',
    Referer: 'https://www.meetic.fr/d/onlines',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
};
function generateConfig() {
    const headersClone = Object.assign({}, exports.headers);
    headersClone.Authorization = (0, storage_1.read)('auth');
    headersClone.Cookie = (0, storage_1.read)('cookie');
    const config = {
        headers: headersClone,
    };
    return config;
}
exports.generateConfig = generateConfig;
exports.axiosInstance = axios_1.default.create({
    baseURL: 'https://www.meetic.fr/apida/',
});
