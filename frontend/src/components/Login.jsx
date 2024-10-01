import React from 'react'
import "../styles/login.css"

const Login = () => {
  return (
    <div className='login'>
        <div className='login-header'> <img src="src/assets/Logo12.png" alt=""height="24px" width="156.77px" /></div>
        <div className='login-main'>
            <div>
                <div>
                <h3>Create a new account</h3>
                <hr />
                <div><img src="" alt="" /> <h2>Sign Up with Google</h2></div>
                </div>
                <div>
                    <button>Create an Account</button>
                    <p>Already have an account? Sign In</p>
                </div>
            </div>
        </div>
        <div className='login-footer'> <p>© 2023 Reachinbox. All rights reserved.</p> </div>
        
    </div>
  )
}

export default Login