"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
const storage_1 = require("../storage");
function loginProcess(email, password) {
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
        await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1');
        await page.setViewport({
            width: 375,
            height: 667,
            deviceScaleFactor: 1,
        });
        await page.setJavaScriptEnabled(true);
        await page.evaluateOnNewDocument(() => {
            // Pass webdriver check
            Object.defineProperty(navigator, 'webdriver', {
                get: () => false,
            });
        });
        await page.evaluateOnNewDocument(() => {
            // Overwrite the `plugins` property to use a custom getter.
            Object.defineProperty(navigator, 'plugins', {
                // This just needs to have `length > 0` for the current test,
                // but we could mock the plugins too if necessary.
                get: () => [1, 2, 3, 4, 5],
            });
        });
        await page.evaluateOnNewDocument(() => {
            // Overwrite the `languages` property to use a custom getter.
            Object.defineProperty(navigator, 'languages', {
                get: () => ['fr-FR', 'fr'],
            });
        });
        await page.goto('https://www.meetic.fr/m/', {
            waitUntil: 'networkidle2',
        });
        const acceptCookiesSelector = '#onetrust-accept-btn-handler';
        await page.waitForSelector(acceptCookiesSelector);
        await page.click(acceptCookiesSelector);
        const showLoginSelector = '[data-description="login"]';
        await page.waitForSelector(showLoginSelector);
        await page.focus(showLoginSelector);
        await page.keyboard.press('Enter');
        const emailSelector = '[data-description="email"]';
        await page.waitForSelector(emailSelector);
        await page.focus(emailSelector);
        await page.keyboard.type(email);
        const passwordSelector = '[data-description="password"]';
        await page.waitForSelector(passwordSelector);
        await page.focus(passwordSelector);
        await page.keyboard.type(password);
        const loginSelector = '[data-description="validate"]';
        await page.waitForSelector(loginSelector);
        await page.focus(loginSelector);
        await page.keyboard.press('Enter');
        await page.waitForNavigation();
        const rootPageSelector = '#root';
        await page.waitForSelector(rootPageSelector);
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
