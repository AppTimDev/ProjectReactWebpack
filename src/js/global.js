console.log(`VERSION: ${VERSION}`);
let public_url = '/'
if(process.env.NODE_ENV==='production'){
    //console.log('NODE_ENV: production');    
    public_url = '/react'
}
else if(process.env.NODE_ENV==='development'){
    console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`);
    console.log('NODE_ENV: development');
    public_url = '/'
}

const url = (link)=>{
    //console.log(public_url);
    let res = public_url + link;
    return res.replace("//", "/")
}
export {public_url, url}