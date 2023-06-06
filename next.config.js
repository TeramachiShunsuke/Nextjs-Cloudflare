/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        bffHost: process.env.BFF_HOST,
        host: process.env.HOST,
        clientSecret: process.env.COGNITO_CLIENT_SECRET,
        issuer: process.env.COGNITO_ISSUER,
        userPool: process.env.COGNITO_USERPOOL_ID,
        clientId: process.env.COGNITO_CLIENT_ID,
        cryptokey: process.env.COGNITO_CRYPTOKEY,
        documentUrl: process.env.DOC_URL,
        tutorialUrl: process.env.TUTORIAL_URL,
        modelingUrl: process.env.MODELING,
        homePageUrl: process.env.HOMEPAGE_URL,
        contactPageUrl: process.env.CONTACT_PAGE,
        mode: process.env.NODE_ENV
    },
    staticPageGenerationTimeout: 10,
    skipMiddlewareUrlNormalize: true
}

module.exports = nextConfig
