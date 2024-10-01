import React from 'react'
import "../styles/login.css"
import EmailAuth from './EmailAuth'

const Login = () => {
  return (
    <div className='login'>
        <div className='login-header'> <img src="src/assets/Logo12.png" alt=""height="24px" width="156.77px" /></div>
        <div className='login-main'>
            <EmailAuth/>
        </div>
        <div className='login-footer'> <p>© 2023 Reachinbox. All rights reserved.</p> </div>
        
    </div>
  )
}

export default Login