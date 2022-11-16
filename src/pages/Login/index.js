import React from 'react'
import { Url, ApiUrl } from '../../js/global'
import { redirect } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const postLogin = (navigate) => {
    const url = ApiUrl('/login')

    fetch(url, { method: 'POST', redirect: 'follow' })
        .then((res) => {
            console.log(res)
            console.log(res.status)
            return res.json()
        })
        .then((res) => {
            // HTTP 301 response
            console.log('json:')
            console.log(res)
            return navigate(Url('/'))
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
