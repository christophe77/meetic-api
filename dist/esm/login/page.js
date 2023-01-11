async function setPageAttributes(page) {
    await Promise.all([
        page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'),
        page.setViewport({
            width: 375,
            height: 667,
            deviceScaleFactor: 1,
        }),
        page.setJavaScriptEnabled(true),
        page.evaluateOnNewDocument(() => {
            // Pass webdriver check
            Object.defineProperty(navigator, 'webdriver', {
                get: () => false,
            });
        }),
        page.evaluateOnNewDocument(() => {
            // Overwrite the `plugins` property to use a custom getter.
            Object.defineProperty(navigator, 'plugins', {
                // This just needs to have `length > 0` for the current test,
                // but we could mock the plugins too if necessary.
                get: () => [1, 2, 3, 4, 5],
            });
        }),
        page.evaluateOnNewDocument(() => {
            // Overwrite the `languages` property to use a custom getter.
            Object.defineProperty(navigator, 'languages', {
                get: () => ['fr-FR', 'fr'],
            });
        }),
        page.goto('https://www.meetic.fr/m/', {
            waitUntil: 'networkidle2',
        }),
    ]);
    return page;
}
export default setPageAttributes;
