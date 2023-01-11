"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
const storage_1 = require("../storage");
const page_1 = __importDefault(require("./page"));
async function loginProcess(email, password) {
    return new Promise(async (resolve) => {
        (0, storage_1.init)();
        const browser = await puppeteer_1.default.launch({
            headless: false,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '--disable-site-isolation-trials',
            ],
            devtools: true,
        });
        const [page] = await browser.pages();
        const client = await page.target().createCDPSession();
        await client.send('Network.enable');
        await client.send('Network.setRequestInterception', {
            patterns: [{ urlPattern: '*' }],
        });
        client.on('Network.requestIntercepted', async (devToolEvent) => {
            if (devToolEvent.request.url === 'https://www.meetic.fr/apida/account') {
                resolve({
                    auth: devToolEvent.request.headers.Authorization,
                    cookie: devToolEvent.request.headers.Cookie,
                });
            }
            client.send('Network.continueInterceptedRequest', {
                interceptionId: devToolEvent.interceptionId,
            });
        });
        const meeticLoginPage = await (0, page_1.default)(page);
        const acceptCookiesSelector = '#onetrust-accept-btn-handler';
        await meeticLoginPage.waitForSelector(acceptCookiesSelector);
        await meeticLoginPage.click(acceptCookiesSelector);
        const showLoginSelector = '[data-description="login"]';
        await meeticLoginPage.waitForSelector(showLoginSelector);
        await meeticLoginPage.focus(showLoginSelector);
        await meeticLoginPage.keyboard.press('Enter');
        const emailSelector = '[data-description="email"]';
        await meeticLoginPage.waitForSelector(emailSelector);
        await meeticLoginPage.focus(emailSelector);
        await meeticLoginPage.keyboard.type(email);
        const passwordSelector = '[data-description="password"]';
        await meeticLoginPage.waitForSelector(passwordSelector);
        await meeticLoginPage.focus(passwordSelector);
        await meeticLoginPage.keyboard.type(password);
        const loginSelector = '[data-description="validate"]';
        await meeticLoginPage.waitForSelector(loginSelector);
        await meeticLoginPage.focus(loginSelector);
        await meeticLoginPage.keyboard.press('Enter');
        await meeticLoginPage.waitForNavigation();
        const rootPageSelector = '#root';
        await meeticLoginPage.waitForSelector(rootPageSelector);
        setTimeout(async () => {
            await browser.close();
        }, 2000);
    });
}
async function login(email, password) {
    try {
        const authHeaders = await loginProcess(email, password);
        await (0, storage_1.writeAsync)('auth', authHeaders.auth);
        await (0, storage_1.writeAsync)('cookie', authHeaders.cookie);
        return true;
    }
    catch (error) {
        return false;
    }
}
exports.default = login;
