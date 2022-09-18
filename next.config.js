/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    i18n: {
        locales: ['en', 'it'],
        defaultLocale: 'en'
    },
    sassOptions : {
        prependData: `@import "/styles/variables.scss"; @import "/styles/mixins.scss"; @import "/styles/fonts.scss"; `
    }
};
