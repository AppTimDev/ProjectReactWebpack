const version_number = 'v2'

const CONFIG = {
    production: {
        version: `production_${version_number}`,
        public_url: '/react/',
        api_url: '/api'
    },
    development: {
        version: `development_${version_number}`,
        public_url: '/',
        api_url: '/api'
    }
}

let config = CONFIG[process.env.NODE_ENV]

if(process.env.NODE_ENV==='production'){
    //not log
    //console.log('NODE_ENV: production');    
}
else if(process.env.NODE_ENV==='development'){
    //for testing
    console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`);
    console.log('NODE_ENV: development');
    console.log(config);
}

module.exports = {
    version_number,
    config
}