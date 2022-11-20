import React from 'react'
import { Url, ApiUrl } from '../../js/global'
import { redirect } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const postLogin = (navigate) => {
    const url = ApiUrl('/user/login')
    
    //test
    let body = {
        name:"tim",
        password:"123"
    }
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    //redirect: 'follow',
    fetch(url, { 
            method: 'POST',            
            headers: headers,
            body: JSON.stringify(body)
        })
        .then((res) => {
            console.log(res)
            console.log(`status: ${res.status}`)
            return res.json()
        })
        .then((res) => {
            console.log('json:')
            console.log('respose: ', res)
            if(res && res.redirect && res.path){
                //return navigate(Url('/'))
                return navigate(Url(res.path))
            }
        })
        .catch(function (err) {
            console.info(err + ' url: ' + url)
        })
}

const Login = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>Login Page</div>
            <div>
                <button onClick={(e) => postLogin(navigate)}>Login</button>
            </div>
        </>
    )
}

export default Login
