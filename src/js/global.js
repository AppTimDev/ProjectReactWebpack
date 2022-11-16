import {version_number, config} from '../../config'

console.log(`VERSION: ${VERSION}`);

let CONFIG = config[process.env.NODE_ENV]
const { public_url, api_url } = CONFIG

if(process.env.NODE_ENV==='production'){
    //console.log('NODE_ENV: production');    
    // public_url = '/react'
    // api_url = 'http://localhost:3000/react/api'
}
else if(process.env.NODE_ENV==='development'){
    console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`);
    console.log('NODE_ENV: development');
    console.log(CONFIG);
    // public_url = '/'
    // api_url = 'http://localhost:3000/api'
}

const ApiUrl = (link)=>{
    let res = api_url + link;
    return res
}
const Url = (link)=>{
    let res = public_url + link;
    return res.replace("//", "/")
}

export {public_url, api_url, Url, ApiUrl}