// @ts-check
//@type {import('@playwright/test').PlayWrightTestConfig}
const config = {
    use:{
        headless: false,
        viewport: {width:1280, height :720},
        ignoreHTTPSErrors: true,
        httpCredentials: { username: "pbqaenv", password: "Bl@ck2ye" },
        video: 'on-first-retry',
        browserName: 'chromium',
        brand: 'pt',
        //brandurl : 'potterybarn.com',
        env : 'uat3'
    },
};

export default config;