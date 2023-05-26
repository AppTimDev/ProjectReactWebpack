import {config} from '../../config'
const { public_url, api_url } = config

//define global variables from webpack.config
window.version = VERSION
// console.log(`VERSION: ${VERSION}`);

const ApiUrl = (link)=>{
    let res = api_url + link;
    return res
}
const Url = (link)=>{
    let res = public_url + link;
    return res.replace("//", "/")
}

export {public_url, api_url, Url, ApiUrl}