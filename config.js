const version_number = 'v2'

const config = {
    production: {
        version: `production_${version_number}`,
        public_url: '/react',
        api_url: 'http://localhost:3000/react/api'
    },
    development: {
        version: `development_${version_number}`,
        public_url: '/',
        api_url: 'http://localhost:3000/api'
    }
}

module.exports = {
    version_number,
    config
}