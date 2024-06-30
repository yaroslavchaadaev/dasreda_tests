const config = {
    auth: {
        baseUrlAPI: process.env.TEST_BASE_AUTH_URL_PROD,
        credentials: {
            username: process.env.TEST_USERNAME_DASREDA_PROD,
            password: process.env.TEST_PASSWORD_DASREDA_PROD
        }
    }
}

export default config;
